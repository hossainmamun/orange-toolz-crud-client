import React, { useEffect, useState } from 'react';
import UserListTable from './UserListTable.js';

const UserList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        loadAllUser()
    }, [])

    const loadAllUser = () => {
        fetch('http://localhost:1234/user_list')
            .then(res => res.json())
            .then(data => {
                setUserList(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='mt-5'>
            <UserListTable userList={userList} loadAllUser={loadAllUser} key={userList.id} />
        </div>
    );
};

export default UserList;