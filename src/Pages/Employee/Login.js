import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Login = () =>{
    const [passwd,SetPasswd] = useState('');
    const [mail,setMail] = useState('');
    const history = useHistory();
    
    const loginEmployee= ()=>{
        Axios.post('https://vi-jobs.herokuapp.com/employee/login',{
            password:passwd,mail
        }).then(response=>{
            if(response.data.loggedin===true){
                localStorage.setItem("loggedin",true);
                localStorage.setItem("username",response.data.username);
                history.push('/homeEmployee');
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
                <h1>Employee Login</h1>
                </li>
            </ul>
            </nav>
            
                <form class="bg-light">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" onChange={event =>{setMail(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="pwd">Password:</label>
                    <input type="password" class="form-control" id="pwd" placeholder="Create password" name="pwd" onChange={event =>{SetPasswd(event.target.value)}}  required/>
                </div>
                <button type="button" class="btn btn-primary" onClick={loginEmployee}>Login</button>
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

export default Login;