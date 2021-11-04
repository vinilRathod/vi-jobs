import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Profile = () =>{
    const [data,setData] = useState([]);
    const [skill1,setSkill1] = useState('');
    const [cont,setCont]=useState('')
    const [skill2,setSkill2] = useState('');
    const [skill3,setSkill3] = useState('');
    const [exp,setExp] = useState('');
    const [loc,setLocation] = useState('');
    const [branch,setBranch] = useState('');
    const [cgpa,setCgpa] = useState('');
    const name=localStorage.getItem("username");
    const history = useHistory();

    useEffect(()=>{
        
        Axios.get(`https://vi-jobs.herokuapp.com/employee/profile/${name}`).then(response=>{
            setData(response.data);
            
        })
    },[])

    const updateEmployee= ()=>{
        var update={}
        if(cont!==''){
            update.cont=cont
        }
        else{
            update.cont=data.cont
        }
        if(skill1!==''){
            update.skill1=skill1
        }else{
            update.skill1=data.skill1
        }
        if(skill2!==''){
            update.skill2=skill2
        }else{
            update.skill2=data.skill2
        }
        if(skill3!==''){
            update.skill3=skill3
        }else{
            update.skill3=data.skill3
        }
        
        if(exp!==''){
            update.exp=exp
        }else{
            update.exp=data.exp
        }
        if(loc!==''){
            update.loc=loc
        }else{
            update.loc=data.loc
        }
        if(cgpa!==''){
            update.cgpa=cgpa
        }else{
            update.cgpa=data.cgpa
        }
        if(branch!==''){
            update.branch=branch
        }else{
            update.branch=data.branch
        }
        console.log(update);
        Axios.post(`https://vi-jobs.herokuapp.com/employee/update/${localStorage.getItem('username')}`,update).then(response=>{
            if(response.data.pass){
                alert(response.data.msg);
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
                <h1>{data.name}'s Profile</h1>
                </li>
            </ul>
            </nav>
            
                <form class="bg-light">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" value={data.mail} name="email"  readonly/>
                </div>
                <div class="form-group">
                    <label for="cont">Contact:</label>
                    <input type="tel" class="form-control" id="cont" placeholder={data.cont} name="cont" onChange={event =>{setCont(event.target.value)}} pattern="^\d{10}$" />
                </div>
                
                <div class="form-group">
                    <label for="skill1">Top Skill 1:</label>
                    <input type="text" class="form-control" id="skill1" placeholder={data.skill1} name="skill1" onChange={event =>{setSkill1(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="skill2">Top Skill 2:</label>
                    <input type="text" class="form-control" id="skill2" placeholder={data.skill2} name="skill2" onChange={event =>{setSkill2(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="skill3">Top Skill 3:</label>
                    <input type="text" class="form-control" id="skill3" placeholder={data.skill3} name="skill3" onChange={event =>{setSkill3(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="branch">Graduation Branch:</label>
                    <input type="text" class="form-control" id="branch" placeholder={data.branch} name="branch" onChange={event =>{setBranch(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="cgpa">Graduation CGPA :</label>
                    <input type="text" class="form-control" id="cgpa" placeholder={data.cgpa} name="cgpa" onChange={event =>{setCgpa(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc" placeholder={data.loc} name="loc" onChange={event =>{setLocation(event.target.value)}} />
                </div>
                <div class="form-group">
                    <label for="exp">Experience(in years):</label>
                    <input type="text" class="form-control" id="exp" placeholder={data.exp} name="exp" onChange={event =>{setExp(event.target.value)}} />
                </div>
                <button type="button" class="btn btn-primary" onClick={updateEmployee}>Update</button>
            </form>
            
                
            
            </div>
            

    )
}

export default Profile;