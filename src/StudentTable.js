import React, {useState, useEffect} from "react";
const getAllEndPoint = 'http://localhost:8080/students/all'
const newStudentEndPoint = 'http://localhost:8080/students/new'
const deleteStudentEndPoint = 'http://localhost:8080/students/delete?id='
export default function StudentTable() {
    const [name, setName] = useState('')
    const [state, setState] = useState([])
    useEffect(() => {
       load()
    }, []);

    const onChange = updatedStudent => {
        const studentId = state.findIndex(stu => stu.id === updatedStudent.id)
        state[studentId] = updatedStudent;
        setState([...state]);
    }

    const load = () =>{
        fetch(getAllEndPoint)
            .then(response => response.json())
            .then(data => setState(data));
    }

    const saveStudent = () => {
        fetch(newStudentEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name })
        })
            .then(res =>  res.json())
            .then(data => setState([...state, data]))
    }

    const deleteStudent = (id) => {
        fetch(deleteStudentEndPoint + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => load())
    }

    const updateStudentHandler = data =>{
        onChange ({...state, ...data})
    }

    return (
        <div>
            <ul>
                { state.map(el => (
                    <li key={el.id}> <input type="text" value = {el.name} onChange={(e) => updateStudentHandler({name: e.target.value})}/> <button onClick = {() => deleteStudent(el.id)}>Delete </button></li>
                )) }
            </ul>
            Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <button onClick={() => saveStudent()}>Save Student</button>
        </div>
    );
}