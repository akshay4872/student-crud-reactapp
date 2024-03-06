import axios from 'axios';

 const baseURL = "http://localhost:8080/api/v1/Studentslist";
// const baseURL = "http://localhost:3000/students";


class StudentService {
    // CRUD operation

    getStudents(){
        return axios.get(baseURL);
    }
    
    getStudentsById(id){
        return axios.get(baseURL + '/' + id);
    }
    

    createstudent(id){
        console.log(id)
        return axios.post(baseURL,id);
    }
    
    updateStudent(id,student){
        console.log(id)
        return axios.put(baseURL+'/'+id,student);
    }

    deleteStudent(id){
                
        return axios.delete(baseURL+'/' +id);
    }
}

export default new StudentService();