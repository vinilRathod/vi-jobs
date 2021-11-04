import React from 'react';
import {Link} from 'react-router-dom';
import quote1 from './quote1.PNG';
import quote2 from './quote2.PNG';
const Home = () =>{
    return(
        <div class='container-fluid mt-3 bg-light'>
            <div class='container text-center'>
               <h1> Welcome to VI-JOBS</h1>
            </div>
            <div class="d-flex justify-content-center">
                <div class="p-2">
                    <Link to='/registerEmployee'>
                    <button type="button" class="btn btn-primary">WANT AN EMPLOYER</button>
                    </Link>
                </div>
                <div class="p-2">
                    <Link to='/registerEmployer'>
                    <button type="button" class="btn btn-primary">WANT AN EMPLOYEE</button>
                    </Link>
                </div>
            </div>
            <div class='container text-center'>
                <div class="p-2 text-secondary">
                    Already have an account?
                </div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="p-2">
                <Link to="/loginEmployee">
                    <button type="button" class="btn btn-secondary">EMPLOYEE</button>
                </Link>
                </div>
                <div class="p-2">
                <Link to="/loginEmployer">
                    <button type="button" class="btn btn-secondary">EMPLOYER</button>
                </Link>
                </div>
            </div>
            <div id="demo" class="carousel slide" data-ride="carousel" class="text-center">
                <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                </ul>
                <div class="carousel-inner">
                    
                    <div class="carousel-item active">
                    <img src={quote1} alt="vi-jobs" width="500" height="400" />
                    </div>
                    <div class="carousel-item">
                    <img src={quote2} alt="vi-jobs" width="500" height="400" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#demo" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#demo" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>

                </div>
        </div>
    )
}

export default Home;
