import React from 'react';
import style from './UserSelfCard.module.css';

const UserSelfCard = ({ user }) => {
  return (
    
    <div className={style.container}>
      
      <div className={style.d1}> 
        <img className={style.img} src="https://randomuser.me/api/portraits/men/31.jpg"/>
        <div className={style.d11}>
          <p className={style.p1}>{user.name}</p>
          <p className={style.p2}>{user.surName}</p>
        </div>
      </div>

      <div className={style.d2}>
        <p>{user.gender}</p>
        <p>.</p>
        <p>{user.age}</p>
      </div>
      
    </div>
    

  );
};
export default UserSelfCard;
