import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
const Header = (props) => {
 
  return (
    
    <header className={s.header}>
      
      <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d747114f-d4d0-4093-8ac9-c30bbcfb9983/da8vkcr-67dcd669-f9a8-446c-bc62-37440c8c2bf3.png/v1/fill/w_828,h_965,strp/_late_gift_rainbow_apple_logo_vector_by_windytheplaneh_da8vkcr-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTgyNiIsInBhdGgiOiJcL2ZcL2Q3NDcxMTRmLWQ0ZDAtNDA5My04YWM5LWMzMGJiY2ZiOTk4M1wvZGE4dmtjci02N2RjZDY2OS1mOWE4LTQ0NmMtYmM2Mi0zNzQ0MGM4YzJiZjMucG5nIiwid2lkdGgiOiI8PTUwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._Z6USWM-3CXQuCMwlROYoZELDeePbWf9ZGHPGsWyL1U" />
      <div className = {s.loginBlock}>
        {props.isAuth 
        ? <div>{props.login} <button onClick={props.logout}>Log Out</button></div>
         : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;                                                          
