import React, { useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Post = () =>{
    const [loc,setLocation] = useState('');
    const [company,setCompany] = useState('');
    const [title,setTitle] = useState();
    const [type,setType] = useState();
    const [link,setLink] = useState();
    const [skill1,setSkill1] = useState('');
    const [skill2,setSkill2] = useState('');
    const mail=localStorage.getItem('username');
    const history = useHistory();
    
    const postJob= ()=>{
        Axios.post('https://vi-jobs.herokuapp.com/employer/post',{
            mail,title,type,loc,skill1,skill2,company,link
        }).then(response=>{
            if(response.data.pass){
                alert(response.data.msg);
                history.push('/homeEmployer');
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
                <h1>Post a Job</h1>
                </li>
            </ul>
            </nav>
            
                <form class="bg-light">
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title" name="title" onChange={event =>{setTitle(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="type">Type:</label>
                    <input type="text" class="form-control" id="type" placeholder="Enter type" name="type" onChange={event =>{setType(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="company">Company Name:</label>
                    <input type="text" class="form-control" id="company" placeholder="Enter company name" name="company" onChange={event =>{setCompany(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc" placeholder="Enter location" name="loc" onChange={event =>{setLocation(event.target.value)}} required/>
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
                    <label for="link">Link:</label>
                    <input type="url" class="form-control" id="link" placeholder="Enter Link" name="link" onChange={event =>{setLink(event.target.value)}} required/>
                </div>
                <button type="button" class="btn btn-primary" onClick={postJob}>Post</button>
            </form>
            </div>

    )
}

export default Post;