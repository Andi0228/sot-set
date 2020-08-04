import React from "react";

import Paginator from "../commom/Paginator/Paginator.jsx";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageCenged, ...props}) => {
  return (
    <div>
      <Paginator currentPage={currentPage} onPageCenged={onPageCenged} totalItemsCount={totalUsersCount}
      pageSize={pageSize} />
      <div>
      {props.users.map( u => 
        <User user = {u}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
        follow={props.follow}
        key={u.id}/>)
      }
      </div>
    </div>)
};

export default Users;
