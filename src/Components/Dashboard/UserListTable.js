import React, { useState } from 'react';
import EditUser from './EditUser.js';

const UserListTable = ({ userList, loadAllUser }) => {
    const [block, setBlock] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [edit, setEdit] = useState({})

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:1234/delete_user/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('user delete successfully')
                }
                loadAllUser();
            })
            .catch(err => {
                console.log(err)
            })
    }

    function openModal(id) {
        fetch(`http://localhost:1234/Edit_user_info/${id}`)
            .then(res => res.json())
            .then(data => {
                setEdit(data)
            })
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container'>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr className='text-capitalize'>
                            <th>no</th>
                            <th>name</th>
                            <th>email</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userList.map((list, index) =>
                                <tr className='text-capitalize'>
                                    <td>{index + 1}</td>
                                    <td>{list.name}</td>
                                    <td>{list.email}</td>
                                    <td className='d-flex justify-content-around align-items-center p-0'>
                                        {
                                            block ?
                                                <button onClick={() => setBlock(!block)} className='btn btn-danger text-white rounded-0' style={{ width: '33%' }}>block</button> :
                                                <button onClick={() => setBlock(!block)} className='btn btn-success text-white rounded-0' style={{ width: '33%' }}>active</button>
                                        }
                                        <button className='btn btn-info text-center text-white w-50 rounded-0' onClick={() => openModal(list.id)} style={{ width: '33%' }}>Edit</button>
                                        <button className='btn btn-danger text-center text-white w-50 rounded-0' onClick={() => handleDeleteUser(list.id)} style={{ width: '33%' }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <EditUser modalIsOpen={modalIsOpen} closeModal={closeModal} edit={edit} key={edit.id} />
            </div>
        </div>
    );
};

export default UserListTable;