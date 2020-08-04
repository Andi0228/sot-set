import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../commom/preloader/preloader";

import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
const ProfileInfo = ({profile,status,updateStatus  }) => {

if (!profile){    //props.profile == null || props.profile == undefined
return <Preloader/>
}

  return (
    <div >
      {/* <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt=""/>
        ava + description
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    </div>
  );
};
export default ProfileInfo;