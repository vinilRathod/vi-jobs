import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';

const Home = () =>{
    const [jobs,setJob]=useState([]);
    const [skill,setSkill]=useState();
    const history=useHistory();
    useEffect(()=>{
        Axios.get(`https://vi-jobs.herokuapp.com/employer/jobs/${localStorage.getItem('username')}`).then((response)=>{
            setJob(response.data);
        })
    },[])
    const deleteJob=(id)=>{
        console.log(id);
        Axios.delete(`https://vi-jobs.herokuapp.com/employer/job/${id}`).then(()=>{
            alert("Job deleted!");
            history.go(0);
        })
    }
    const searchEmployee=()=>{
        history.push(`/search/${skill}`);
    }
    return(
        <div class="container">
            
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark justify-content-center">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <h3>VI-JOBS</h3>
                </li>
            </ul>
            </nav>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item text-white">
                <a href='/profileEmployer' class="text-white nav-link">Profile</a>
                </li>
                <li class="nav-item text-white">
                <a href='/post' class="text-white nav-link">Post</a>
                </li>
                <li class="nav-item text-white">
                <a href='/logoutEmployer' class="text-white nav-link">Logout</a>
                </li>
            </ul>
            </nav>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="text" placeholder="Search Employee" onChange={(e)=>{setSkill(e.target.value)}} title="Search Employee based on top skill"   />
                <button class="btn btn-success" type="submit" onClick={searchEmployee}>Search</button>
            </form>
            </nav>
            <div class='container text-center'>
               <h2 class="text-primary">Posted Jobs</h2>
            </div>
        
            {jobs.map((val)=>{
                return(
                    <div>
                    <div class="card">
                        <div class="card-header">
                            Title : {val.title}
                        </div>
                        <div class="card-body">
                            Company : {val.company}<br/>
                            Type : {val.type}<br/>
                            Skills : {val.skill1},{val.skill2}<br/>
                            Location : {val.location}<br/>
                        </div>
                        <div class="card-footer">
                            Mail : {val.mail}<br/>
                            Link : <a href={`//${val.link}`}>{val.link}</a><br/>
                            Date Posted : {val.datecreated.slice(0,10)}<br/><br />
                            <button type="btn btn-danger" onClick={()=>{deleteJob(val.id)}}>Delete Job</button>
                        </div>
                    </div>
                    <div class='bg-dark'>   
                         -------
                    </div>
                    </div>
                )
            })}
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
export default Home;