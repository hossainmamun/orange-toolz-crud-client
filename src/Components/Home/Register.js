import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const newUserInfo = {
        name: name,
        email: email,
        pass: pass
    }
    // console.log(newUserInfo);

    const handleFromSubmit = (e) => {
        fetch('http://localhost:1234/user_create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('user registration successfully done')
                    window.location.reload()
                }
                else {
                    alert('registration failed')
                }
            })
        e.preventDefault();
    }

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className="col-md-6">
                    <form onSubmit={handleFromSubmit} className='shadow p-5'>
                        <div className="form-group">
                            <input type="text" name="name" id="" onChange={(e) => setName(e.target.value)} className="form-control my-3" placeholder='enter name' />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)} className="form-control my-3" placeholder='enter email' />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" id="" onChange={(e) => setPass(e.target.value)} className="form-control my-3" placeholder='enter password' />
                        </div>
                        <div className="form-group">
                            <input type="submit" name="number" id="" className="form-control btn btn-success my-3" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;