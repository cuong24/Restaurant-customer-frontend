import React, {useState, useEffect} from "react";
const getAllEndPoint = 'http://localhost:8080/students/'
const newStudentEndPoint = 'http://localhost:8080/students/'
const updateStudentEndPoint = 'http://localhost:8080/students/'
const deleteStudentEndPoint = 'http://localhost:8080/students/'

export default function StudentTable() {
    const [student, setStudent] = useState({id: "", name: "",grade: 1, parentName: "", address: "",  phone: "", email: ""})
    const [nameError, setNameError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [parentError, setParrentError] = useState("")
    const [addressError, setAddressError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [students, setStudents] = useState([])
    const [state, setState] = useState("Create")
    const [pageNumbers, setPageNumbers] = useState([1])
    const [page, setPage] = useState(0)
    const [sortStyle, setSortStyle] = useState("id")
    const elementsPerPage = 3

    useEffect(() => {
       load()
    }, []);

    const load = () =>{
        fetch(getAllEndPoint)
        .then(response => response.json())
        .then(data => {
            updatePageNumbers(data)
            setStudents(data)
        });
    }

    const updatePageNumbers = (students) => {
        const maxPageNumbers = Math.ceil(students.length / elementsPerPage)
        const newPageNumbers = []
        for (let i = 0; i < maxPageNumbers; i++) {
            newPageNumbers.push(i)
        }
        setPageNumbers([...newPageNumbers])
        if (page === maxPageNumbers) {
            setPage(maxPageNumbers - 1)
        }
    }

    const paginateStudents = () => {
        return students.slice(page*elementsPerPage, page*elementsPerPage + elementsPerPage)
    }

    const inputStudent = (newStudent) => {
        setStudent({...student, [newStudent.action]: newStudent.value})
    }

    const validate = () => {
        resetError()
        var phoneno = /^\d{10,20}$/
        var addressNo = /^.{10,20}$/
        var parentNo  = /^(\w+\s?)*\s*$/
        var valid = 1
        if (!student.phone.match(phoneno)){
            setPhoneError("Please input a valid phone number")
            valid = 0
        }
        if (!student.address.match(addressNo)){
            setAddressError("Address must have 10 - 20 characters")
            valid = 0
        }
        if (!student.parentName.match(parentNo)){
            setParrentError("Parrent name incorrect")
            valid = 0
        }
        if (!student.email.includes('@')){
            setEmailError("Email cannot be without @")
            valid = 0
        }
        return valid
    }

    const save = () => {
        if (validate()){
            if (state === "Update") {
                update()
            } else {
                create()
            }
            sort()
            reset()
        }
    }

    const prepareUpdate = (student) => {
        if (student.grade == null) {
            setStudent({...student, ["grade"]: "1"})
        }if (student.parentName == null) {
            setStudent({...student, ["parentName"]: ""})
        }if (student.address == null) {
            setStudent({...student, ["address"]: ""})
        }if (student.email == null) {
            setStudent({...student, ["email"]: "@"})
        } else {
            setStudent(student)
        }
        setState("Update")
    }

    const update = () => {
        fetch(updateStudentEndPoint, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...student})
        })
        .then(res =>  res.json())
        .then(data => load())
    }

    const deleteStudent = (id) => {
        fetch(`${deleteStudentEndPoint}?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id})
        })
        .then(res =>  res.json())
        .then(data => load())
        reset()
    }

    const create = () => {
        fetch(newStudentEndPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res =>  res.json())
            .then(data => {
                const updatedStudentsList = [...students, data]
                setStudents(updatedStudentsList)
                updatePageNumbers(updatedStudentsList)
            })
    }

    const reset = () => {
        setState("Create")
        setStudent({id:"", name: "", phone: "", grade: "1", parentName: "", address: "", email:""})
        resetError()
    }

    const resetError = () => {
        setNameError("")
        setPhoneError("")
    }
    
    const sort= (style) =>{
        setSortStyle(style)
        switch(style){
            case "id":
                sortById()
                break
            case "name":
                sortByName()
                break
            case "phone":
                sortByPhone()
                break
            default:
                break
        }
    }

    const sortByName = () => {
        let newStudents = students
        newStudents.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
           })
        setStudents(newStudents)
    }

    const sortById = () => {
        let newStudents = students
        newStudents.sort(function(a, b) {
            if(a.id < b.id) return -1;
            if(a.id > b.id) return 1;
            return 0;
           })
        setStudents(newStudents)
    }

    const sortByPhone = () => {
        let newStudents = students
        newStudents.sort(function(a, b) {
            if(a.phone < b.phone) return -1;
            if(a.phone > b.phone) return 1;
            return 0;
           })
        setStudents(newStudents)
    }

    const searchStudent = (data) => {
        let newStudents = students
        newStudents.filter ( 
            student => {
                return student.name.toLowerCase().includes(data.toLowerCase())
            }
           )
        setStudents(newStudents)
    }

return (
        <div className="grid-container">
            <input
                type="text"
                placeholder="name"
                onChange={ (e) => searchStudent(e.target.value)
                }
            /> 
            <div>
                <h1>Input Form</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Grade</th>
                        <th>parent name</th>
                        <th>address</th>
                        <th>email</th>
                        <th>Action 1</th>
                        <th>Action 2</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {student.id}
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="name"
                                    value={ student.name }
                                    onChange={ (e) => inputStudent(
                                        {action: "name", value: e.target.value})
                                    }
                                /> <br></br>
                                <div style={{ fontSize: 12, color: "red" }}>
                                {nameError}
                                </div>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="phone"
                                    value={ student.phone }
                                    onChange={ (e) => inputStudent(
                                        { action: "phone", value: e.target.value })
                                    }
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                {phoneError}
                                </div>
                            </td>
                            <td>
                                <select value={ student.grade }
                                        onChange={ (e) =>
                                            inputStudent({ action: "grade", value: e.target.value })}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="parent name"
                                    value={ student.parentName }
                                    onChange={ (e) => inputStudent(
                                        { action: "parentName", value: e.target.value })
                                    }
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                {parentError}
                                </div>
                            </td>                            
                            <td>
                                <input
                                    type="text"
                                    placeholder="address"
                                    value={ student.address }
                                    onChange={ (e) => inputStudent(
                                        { action: "address", value: e.target.value })
                                    }
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                {addressError}
                                </div>
                            </td>                            
                            <td>
                                <input
                                    type="text"
                                    placeholder="email"
                                    value={ student.email }
                                    onChange={ (e) => inputStudent(
                                        { action: "email", value: e.target.value })
                                    }
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                {emailError}
                                </div>
                            </td>                            
                            <td>
                                <button onClick={ () => save() }>{ state }</button>
                            </td>
                            <td>
                                <button onClick={ () => reset() }>Reset</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1>Student List</h1>
                <div>
                    <select value={ sortStyle }
                        onChange={ (e) =>
                            sort(e.target.value)}>
                        <option value="id">Id</option>
                        <option value="name">Name</option>
                        <option value="phone">Phone</option>
                    </select>
                </div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Grade</th>
                        <th>parent name</th>
                        <th>address</th>
                        <th>email</th>
                        <th>Action 1</th>
                        <th>Action 2</th>
                    </thead>
                    <tbody>
                    { paginateStudents().map(el => (
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.name}</td>
                            <td>{el.phone}</td>
                            <td>{el.grade}</td>
                            <td>{el.parentName}</td>
                            <td>{el.address}</td>
                            <td>{el.email}</td>

                            <td>
                                <button onClick={ (e) => prepareUpdate(el) }
                                >Update</button>
                            </td>
                            <td>
                                <button onClick={ () => deleteStudent(el.id) }>Delete</button>
                            </td>
                        </tr>
                    )) }
                    </tbody>
                </table>
                <div className="page-numbers">
                    {
                        pageNumbers.map(number => {
                            if (number === page) {
                                return (
                                    <li
                                        key={ number }
                                        id={ number }
                                        onClick={ () => setPage(number) }
                                        style={{borderBottom: "1px solid white"}}
                                    >
                                        { number + 1}
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={ number }
                                        id={ number }
                                        onClick={ () => setPage(number) }
                                    >
                                        { number + 1}
                                    </li>
                                );
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}
