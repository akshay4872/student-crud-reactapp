import Table from 'react-bootstrap/Table';
import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentService from '../services/studentservice';


function Studentdata(){

    const [students, setStudents] = useState([]);
   // const baseURL = "http://localhost:3000";
    const navigate = useNavigate();

    const setStudentData = () => {
       // axios.get(baseURL + "/students")
       StudentService.getStudents()
       .then((response) => {
            setStudents(response.data);
            console.log(response.data);
        }).catch(error => {
            alert("Error Ocurred while loading data:" + error);
        });
    }


    useEffect(() => {
        setStudentData();
    }, []);

    
    const removeStudent = (id) => {
        // console.log(id);
        // axios.delete(baseURL + "/students/" +id)
        
        StudentService.deleteStudent(id)
        .then((response) => {
          alert("Student deleted");
          setStudentData();
          
        }).catch(error => {
          alert("error==="+error);
        });
    }
    



    return(
        <div>
    
    <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th  scope="col">#</th>
                    <th  scope="col">Name</th>
                    <th  scope="col">Role</th>
                    <th  scope="col">Actions</th>

                </tr>
            </thead>
            <tbody>
            {
                    students &&
                    students.map((student, index) => (
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.role}</td>


                    <td> |

                    <button onClick={() => removeStudent(student.id)} className="button"><FaTrash /></button>
                    <button onClick={() => navigate('/edit/'+student.id)} className="button"><FaEdit /> </button>
                          
                        
                        
                        </td>

                </tr>
                    ))
                }

            </tbody>
        </Table>

        </div>
    );
}
export default Studentdata;