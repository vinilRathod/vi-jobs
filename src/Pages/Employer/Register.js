import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Register = () =>{
    const [name,setName] = useState('');
    const [passwd,SetPasswd] = useState('');
    const [mail,setMail] = useState('');
    const [cont,setCont] = useState(0);
    const [loc,setLocation] = useState('');
    const [company,setCompany] = useState('');
    const history = useHistory();
    
    const registerEmployee= ()=>{
        Axios.post('https://vi-jobs.herokuapp.com/employer/register',{
            name,password:passwd,mail,cont,loc,company
        }).then(response=>{
            if(response.data.pass){
                alert(response.data.msg);
                history.push('/loginEmployer');
            }else{
                alert(response.data.msg);
            }
        })
    };
    
    return(
        <div class="container">
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <h3>VI-JOBS</h3>
                </li>
            </ul>
            </nav>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item text-white">
                <h1>Employer Registration Form</h1>
                </li>
            </ul>
            </nav>
            
                <form class="bg-light">
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" onChange={event =>{setName(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={event =>{setMail(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="cont">Contact:</label>
                    <input type="tel" class="form-control" id="cont" placeholder="Enter contact no." name="cont" onChange={event =>{setCont(event.target.value)}} pattern="^\d{10}$" required />
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Create password" name="pwd" onChange={event =>{SetPasswd(event.target.value)}} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" minLength="8" maxLength="15" required/>
                </div>
                <div class="form-group">
                    <label for="company">Company Name:</label>
                    <input type="text" class="form-control" id="company" placeholder="Enter company name" name="company" onChange={event =>{setCompany(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc" placeholder="Enter location" name="loc" onChange={event =>{setLocation(event.target.value)}} required/>
                </div>
                <button type="button" class="btn btn-primary" onClick={registerEmployee}>Register</button>
            </form>
            </div>

    )
}

export default Register;