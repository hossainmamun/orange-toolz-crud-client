import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        bottom: "auto",
        transform: "translate(-50%, -50%)",
        border: "0px",
        borderRadius: "8px",
        padding: "40px",
        boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
    },
};

const EditUser = ({ modalIsOpen, closeModal, edit }) => {
    const [userInfo, setUserInfo] = useState({});

    const handleChangeName = (e) => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: edit.email };
        setUserInfo(updateUser);
    }
    const handleChangeEmail = (e) => {
        const updateEmail = e.target.value;
        const updateUser = { name: edit.name, email: updateEmail }
        setUserInfo(updateUser);
    }

    const handleUpdateUser = (updateId) => {
        fetch(`http://localhost:1234/update_user_info/${updateId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    console.log(userInfo)
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='d-flex justify-content-around align-items-center mb-4'>
                    <h2>Edit users</h2>
                    <div className='mt-3'>
                        <button className='btn btn-danger px-3' onClick={closeModal}>close</button>
                    </div>
                </div>

                <div>
                    <h5>edit user id: {edit.id}</h5>
                    <p className='mb-2'>name: {edit.name}</p>
                    <p>email : {edit.email}</p>
                </div>

                {/* form start here */}
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <input type="text" name='name' onChange={handleChangeName} defaultValue={edit.name || ''} placeholder='Enter Name' className='form-control' />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group mb-3">
                                    <input type="email" name='email' onChange={handleChangeEmail} defaultValue={edit.email || ''} placeholder='Enter Email' className='form-control' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='btn btn-dark' onClick={()=>handleUpdateUser(edit.id)} >update</button>
                </div>
            </Modal>
        </div>
    );
};

export default EditUser;