import { Form, Button, Container } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import StudentService from '../services/studentservice';

const EditDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();



    const [enteredstudentName, setenteredstudentName] = useState('');
    const [enteredstudentRole, setenteredstudentRole] = useState('');
    

    //const baseURL = "http://localhost:3000/students";



    const getDetails = () => {
       // axios.get(baseURL + '/' + id)

        StudentService.getStudentsById(id)
            .then(response => {

                // console.log(response);
                const kin = response.data;
                setenteredstudentName(kin.name);
                console.log(kin.name);
                setenteredstudentRole(kin.role);
                
            })
            .catch(error => {
                console.error("Error fetching student data:", error);
            });
    }

     const studentNameChangeHandler = (event) => {
        setenteredstudentName(event.target.value);
     };

     const studentRoleChangeHandler = (event) => {
        setenteredstudentRole(event.target.value);
     };

     const submitActionHandler = (event) => {
        event.preventDefault();
    
         console.log("clicked")
        //update booking data
        //  axios.put(baseURL+'/' + id,{
        //     name: enteredstudentName,
        //     role: enteredstudentRole
        //   })

          StudentService.updateStudent(id,{ name: enteredstudentName, role: enteredstudentRole })
            .then((response) => {
              alert("Student " + enteredstudentName + " updated!");
              navigate("/");
            }).catch(error => {
              alert("error===" + error);
            });
      };
    useEffect(() => {
        if (id)
            getDetails(id);

    }, [id]);

    return (
        <Container>
            <Form onSubmit={submitActionHandler}>
                <Form.Group controlId="form.Name" >
                    <Form.Label>Student Name</Form.Label>
                    <Form.Control type="text" value={enteredstudentName} onChange={studentNameChangeHandler} required />
                </Form.Group>
                <Form.Group controlId="form.Role">
                    <Form.Label>Student Role</Form.Label>
                    <Form.Control type="text" value={enteredstudentRole} onChange={studentRoleChangeHandler} required />
                </Form.Group>
                <br />
                <Button type='submit'>Update Student</Button>
                &nbsp;&nbsp;&nbsp;
                <Button type='button'>Cancel</Button>
            </Form> 
        </Container>
    );
}

export default EditDetails;