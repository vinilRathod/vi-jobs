import React, { useEffect,useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
const Search = () =>{
    const [candidates,setCand]=useState([]);
    const {skill}=useParams();
    useEffect(()=>{
       Axios.get(`http://localhost:3001/employer/search/${skill}`).then(res=>{
           setCand(res.data);
       })
    },[])
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
                    <h2>Candidates having {skill} as top skill</h2>
                </li>
            </ul>
            </nav>
            {candidates.map((val)=>{
                return(
                    <div>
                    <div class="card">
                        <div class="card-header">
                            Name : {val.name}
                        </div>
                        <div class="card-body">
                            Branch : {val.branch}<br/>
                            CGPA : {val.cgpa}<br/>
                            Skills : {val.skill1},{val.skill2},{val.skill3}<br/>
                            Location : {val.loc}<br/>
                            Experience : {val.exp} years <br />
                        </div>
                        <div class="card-footer">
                            Mail : {val.mail}<br/>
                            Contact No. : {val.cont}<br />
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
export default Search;