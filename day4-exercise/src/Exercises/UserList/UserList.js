import React from 'react';
import { UserSelfCard } from '../UserCard';


const UserList = ({ users}) => {
  console.log(users);
  return(
    <>
    
      {users.map(user => {
       return <UserSelfCard user={user} key={user.id}/>
      })}
    
    </>  
    
    
    );
};

export default UserList;
