import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { globalUser } from '../../App.js';

const Login = () => {
    // const [userLogin, setUserLogin] = useContext(globalUser)
    // const [adminLogin, setAdminLogin] = useState({})
    const [userLogin, setUserLogin] = useContext(globalUser)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    let history = useHistory();

    const handleUserLogin = (userEmail) => {
        fetch(`http://localhost:1234/single_user_info/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                setUserLogin(data)
                if (data.email === email && data.password === pass) {
                    history.push('/dashboard')
                }
                else{
                    alert('password incorrect')
                }
            })
            .catch(err => {
                console.log(err)
                alert('incorrect email')
            })
    }

    return (
        <div>
            <div className='container text-center'>
                <h2 className='my-5 text-capitalize'>welcome to the admin panel</h2>
                <h4>admin@gmail.com</h4>
                <h4>admin123</h4>

                <div className='row justify-content-center'>
                    <div className="col-md-6">
                        <div className='shadow p-5'>
                            <div className="form-group">
                                <input type="email" name="email" id="" className="form-control my-3" onChange={(e) => setEmail(e.target.value)} placeholder="enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" id="" className="form-control my-3" onChange={(e) => setPass(e.target.value)} placeholder="enter password" />
                            </div>
                            <div className="form-group">
                                <button onClick={() => handleUserLogin(email)} className="form-control btn btn-success my-3">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;