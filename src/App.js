import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import EmployeeRegister from './Pages/Employee/Register';
import EmployerRegister from './Pages/Employer/Register';
import EmployeeLogin from './Pages/Employee/Login';
import EmployerLogin from './Pages/Employer/Login';
import EmployeeHome from './Pages/Employee/Home';
import EmployerHome from './Pages/Employer/Home';
import EmployeeProfile from './Pages/Employee/Profile';
import EmployerProfile from './Pages/Employer/Profile';
import EmployeeLogout from './Pages/Employee/Logout';
import EmployerLogout from './Pages/Employer/Logout';
import EmployerPost from './Pages/Employer/Post';
import Search from './Pages/Employer/Search';
const App =() =>{
    return (
        <>
        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/registerEmployee" component={EmployeeRegister} />
            <Route exact path="/registerEmployer" component={EmployerRegister} />
            <Route exact path="/loginEmployee" component={EmployeeLogin} />
            <Route exact path="/loginEmployer" component={EmployerLogin} />
            <Route exact path="/homeEmployee" component={EmployeeHome} />
            <Route exact path="/homeEmployer" component={EmployerHome} />
            <Route exact path="/profileEmployee" component={EmployeeProfile} />
            <Route exact path="/profileEmployer" component={EmployerProfile} />
            <Route exact path="/logoutEmployee" component={EmployeeLogout} />
            <Route exact path="/logoutEmployer" component={EmployerLogout} />
            <Route exact path="/post" component={EmployerPost} />
            <Route exact path="/search/:skill" component={Search} />
        </Router>
        </>
    )
}

export default App;