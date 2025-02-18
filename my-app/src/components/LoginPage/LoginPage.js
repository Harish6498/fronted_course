import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage({setIsLoggedIn}) {
    const navigate=useNavigate();
    const [userName,updateUserName]=useState("")
    const [password,updatePassword]=useState("")
    function getUserName(event){
        console.log(event.target.value)
        updateUserName(event.target.value)

    }
    function getPassword(event){
        console.log(event.target.value)
        updatePassword(event.target.value)
    }
    function getLoginDetailes(){
        console.log(userName,password)
        debugger
        if (userName === "" || password === ""){
            alert("User name not found")
        }
        else if (userName === "Hareesh" && password === "8152"){
            setIsLoggedIn(true)
            navigate("/HomePage")
        }else{
            alert("User Name are Not Found....")
        }
    }
  return (
    <div>
        <div class="container">
            <h1 class="loginMainHeading">Welcome to MyJio</h1>
            </div>
            <div class="card loginCard">
                <h2 class="loginHeading">MyJio</h2>
                <label class="labelHeading">UserName</label>
                {/* {userName} */}
                <input type="text" onChange={getUserName}/>
                <label class="labelHeading">Password</label>
                {/* {password} */}
                <input type="password" onChange={getPassword}/>
                <button class="loginBtn" onClick={getLoginDetailes}>Login</button>
            </div>
        </div>
  )
}
