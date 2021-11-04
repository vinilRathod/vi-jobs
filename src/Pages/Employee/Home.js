import React, { useEffect,useState } from 'react';
import Axios from 'axios';
const Home = () =>{
    const [jobs,setJob]=useState([]);
    const [skill,setSkill] = useState('');
    useEffect(()=>{
        if (skill===''){
        Axios.get('https://vi-jobs.herokuapp.com/employee/jobs').then((response)=>{
            setJob(response.data);
        })
    }else{
        Axios.get(`https://vi-jobs.herokuapp.com/employee/job/${skill}`).then(response=>{
            setJob(response.data);
        });
    }
    })
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
                <a href='/profileEmployee' class="text-white nav-link">Profile</a>
                </li>
                <li class="nav-item text-white">
                <a href='/logoutEmployee' class="text-white nav-link">Logout</a>
                </li>
            </ul>
            </nav>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="text" placeholder="Search Skill" onChange={event =>{setSkill(event.target.value)}} />
                <button class="btn btn-success" type="submit">Filter</button>
            </form>
            </nav>
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
                        </div>
                    </div>
                    <div class='bg-dark'>   
                         -------
                    </div>
                    </div>
                )
            })}
            
        </div>
    )
}
export default Home;