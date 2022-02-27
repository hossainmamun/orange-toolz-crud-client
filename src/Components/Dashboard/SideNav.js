import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { globalUser } from '../../App.js';
import '../../Styles/Sidenav.scss'

const SideNav = () => {
    const [adminLogin, setAdminLogin] = useContext(globalUser);
    console.log(adminLogin.name)
    return (
        <div>
            <ul className='list-unstyled sidebar p-0 mt-5'>
                <li>
                    <span className='d-block my-5'>
                        <i class="fas fa-user" style={{ fontSize: "40px", textAlign: 'center' }}></i>
                        <h4>{adminLogin.name}</h4>
                    </span>

                </li>
                <li>
                    <NavLink exact to="/dashboard/userList" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                        user list
                    </NavLink>
                </li>
                {
                    adminLogin.email === 'admin@gmail.com' &&
                    <li>
                        <NavLink exact to="/dashboard/registration" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                            register
                        </NavLink>
                    </li>
                }
                <li>
                    {
                        adminLogin.email !== 'admin@gmail.com' &&
                        <NavLink exact to="/dashboard/file_upload" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active'>
                            file Upload
                        </NavLink>
                    }

                </li>
                <li>
                    <NavLink exact to="/home" className='sidebar-link' activeClassName='sidebar-link sidebar-link-active' onClick={() => setAdminLogin({})}>
                        Logout
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;