import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Register = () =>{
    const [name,setName] = useState('');
    const [passwd,SetPasswd] = useState('');
    const [mail,setMail] = useState('');
    const [cont,setCont] = useState(0);
    const [skill1,setSkill1] = useState('');
    const [skill2,setSkill2] = useState('');
    const [skill3,setSkill3] = useState('');
    const [exp,setExp] = useState('');
    const [loc,setLocation] = useState('');
    const [branch,setBranch] = useState('');
    const [cgpa,setCgpa] = useState('');
    const history = useHistory();

    const registerEmployee= ()=>{
        Axios.post('https://vi-jobs.herokuapp.com/employee/register',{
            name,password:passwd,mail,cont,skill1,skill2,skill3,loc,cgpa,branch,exp
        }).then(response=>{
            if(response.data.pass){
                alert(response.data.msg);
                history.push('/loginEmployee');
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
                <h1>Employee Registration Form</h1>
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
                    <label for="skill1">Top Skill 1:</label>
                    <input type="text" class="form-control" id="skill1" placeholder="Enter skill" name="skill1" onChange={event =>{setSkill1(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="skill2">Top Skill 2:</label>
                    <input type="text" class="form-control" id="skill2" placeholder="Enter skill" name="skill2" onChange={event =>{setSkill2(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="skill3">Top Skill 3:</label>
                    <input type="text" class="form-control" id="skill3" placeholder="Enter skill" name="skill3" onChange={event =>{setSkill3(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="branch">Graduation Branch:</label>
                    <input type="text" class="form-control" id="branch" placeholder="Enter branch" name="branch" onChange={event =>{setBranch(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="cgpa">Graduation CGPA :</label>
                    <input type="number" class="form-control" id="cgpa" placeholder="Enter CGPA" name="cgpa" onChange={event =>{setCgpa(event.target.value)}}  max="10" required/>
                </div>
                <div class="form-group">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc" placeholder="Enter location" name="loc" onChange={event =>{setLocation(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="exp">Experience(in years):</label>
                    <input type="number" class="form-control" id="exp" placeholder="Enter experience" name="exp" onChange={event =>{setExp(event.target.value)}}  required/>
                </div>
                <button type="button" class="btn btn-primary" onClick={registerEmployee}>Register</button>
            </form>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item text-white">
                <h3>Made with &#10084; by Vinil Rathod!</h3>
                </li>
            </ul>
            </nav>
            </div>

    )
}

export default Register;