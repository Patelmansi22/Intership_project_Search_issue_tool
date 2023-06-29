import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import InputField from '../Components/InputField';
import "../Styles/Login.css";
import constants from '../Constants/LoginPageConstant'
import Regconstants from '../Constants/RegistrationConstant'
import { FaUser, FaLock } from "react-icons/fa";
import errorConstant from '../Constants/ErrorConstant';
import { EyeSlash, Eye } from 'react-bootstrap-icons';

const getLocalstorage = () => {
  let data = localStorage.getItem("data");
  if (data) {
    return data = JSON.parse(data)
  } else {
    return []
  }
}
const ManagerLogin = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState(getLocalstorage());
  const [passwordType, setPasswordType] = useState("password")
  const [employee_id, setEmployee_id] = useState("")
  const [name, setName] = useState("")



  const submitHandler = () => {
 
let data =localStorage.getItem('mng')
let data1=JSON.parse(data)


   

   if (name=== data1[0].name && employee_id===data1[0].empid) { 
    navigate("/manager1")
    } 

else{
    alert("user not found")
}
  }

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }


  return (
    <>
      <div class="container1">
        <div class="screen1">
          <div class="screen__content1">
            <form class="login1">
            <div class="login__field1" style={{ display: "flex" }}>
                <FaUser />
                <InputField type="text" placeholder="Employee id" className="login__input1" id="exampleInputEmail1"
                  ariaDescribedby="emailHelp" value={employee_id} onChange={(e) => setEmployee_id(e.target.value)} />
          
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaLock />
                <InputField placeholder="NAME" className="login__input1" id="exampleInputPassword1"
                  value={name} onChange={(e) => setName(e.target.value)} />
            
                <span class="" onClick={togglePassword}>
                  {passwordType === "password" ? <EyeSlash /> : <Eye />}
                </span>
              </div>
              <a className='reg2' href='/forget'>{constants.forget}</a>
              <button class="button login__submit1" type='button' onClick={() => submitHandler()}>
                <span class="button__text1">{constants.submitButton}</span>
              </button>
              <p className='reg3'>{constants.account}<a href='/registration'>{Regconstants.RegistrationFormTitle}</a></p>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default ManagerLogin
