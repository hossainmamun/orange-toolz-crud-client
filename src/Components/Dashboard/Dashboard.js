import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { globalUser } from '../../App.js';
import Register from '../Home/Register.js';
import FileUpload from './FileUpload.js';
import SideNav from './SideNav.js';
import UserList from './UserList.js';

const Dashboard = () => {
    const [adminLogin, setAdminLogin] = useContext(globalUser);
    const currentLocation = useLocation();
    
    return (
        <div>
            {/* navbar */}
            <nav class="navbar navbar-dark bg-dark py-3">
                <div class="container-fluid d-flex justify-content-between">
                    <Link to="/home" style={{textDecoration: 'none', color: 'white'}}>
                        <h4>Home</h4>
                    </Link>
                    <h4 className='text-white text-capitalize'>
                        <span>{adminLogin.name}</span>
                    </h4>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-md-2 bg-light">
                        <SideNav />
                    </div>
                    <div className="col-md-9">
                        {currentLocation.pathname === '/dashboard/userList' && <UserList/>}
                        {currentLocation.pathname === '/dashboard/registration' && <Register/>}
                        {currentLocation.pathname === '/dashboard/file_upload' && <FileUpload/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;