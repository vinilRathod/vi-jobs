import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
const Profile = () =>{
    const [data,setData] = useState([]);
    
    const history = useHistory();

    useEffect(()=>{
        Axios.get(`http://localhost:3001/employer/${localStorage.getItem('username')}`).then(response=>{
            setData(response.data);
        })
    },[])
    const [cont,setCont] = useState('');
    const [company,setCompany] = useState('');
    const [loc,setLocation] = useState('');
    const updateEmployee= ()=>{
        var update={}
        if(cont!==''){
            update.cont=cont
        }
        else{
            update.cont=data.cont
        }
        if(loc!==''){
            update.loc=loc
        }else{
            update.loc=data.loc
        }
        if(company!==''){
            update.company=company
        }
        else{
            update.company=data.company
        }
        Axios.post(`http://localhost:3001/employer/update/${localStorage.getItem('username')}`,update).then(response=>{
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
                <h1>{data.name}'s Profile</h1>
                </li>
            </ul>
            </nav>
            
                <form class="bg-light">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder={data.mail} name="email"  readonly/>
                </div>
                <div class="form-group">
                    <label for="cont">Contact:</label>
                    <input type="tel" class="form-control" id="cont" placeholder={data.cont} name="cont" onChange={event =>{setCont(event.target.value)}} pattern="^\d{10}$" />
                </div>
                <div class="form-group">
                    <label for="company">Company Name:</label>
                    <input type="text" class="form-control" id="company" placeholder={data.company} name="company" onChange={event =>{setCompany(event.target.value)}} required/>
                </div>
                <div class="form-group">
                    <label for="loc">Location:</label>
                    <input type="text" class="form-control" id="loc" placeholder={data.loc} name="loc" onChange={event =>{setLocation(event.target.value)}} />
                </div>
                <button type="button" class="btn btn-primary" onClick={updateEmployee}>Update</button>
            </form>
            </div>

    )
}

export default Profile;