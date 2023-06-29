import React, { useState, useEffect } from 'react'
import "../Styles/Registration.css";
import Button from '../Components/Button';
import { FaUser, FaLock, FaEnvelope, FaHome } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import constants from '../Constants/LoginPageConstant'
import InputField from '../Components/InputField';
import Regconstants from '../Constants/RegistrationConstant'
import errorConstant from '../Constants/ErrorConstant';

const Registration = () => {

  // const [data, setData] = use{State({});
  const [passwordType, setPasswordType] = useState("password")

  const [registration, setRegistration] = useState({});
  const [technology, setTechnology] = useState("");
  const [projectmanagername, setProjectmanagername] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [employee_id, setEmployee_id] = useState("")
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("");
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    errorconfirmpassword: '',
    errorID: "",
    errorPwd: "",
    errorEmail: ''
  });



  const handleSubmit = () => {


    const validEmployeeID = /^\d{10}$/;
    const validPwd = /[a-z](?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    


    const strongNumber = validEmployeeID.test(employee_id);
    const strongPassword = validPwd.test(password);
    const strongEmail = email.match(validEmail);


    if (employee_id.trim().length === 0) {
      error.errorID = errorConstant.required
    } else if (employee_id.trim() && strongNumber) {
      delete error.errorID
    } else {
      error.errorID = errorConstant.correctId
    }
    if (email.trim().length === 0) {
      error.errorEmail = errorConstant.required
    } else if (strongEmail) {
      delete error.errorEmail
    } else {
      error.errorEmail = errorConstant.email
    }
    if (password.trim().length === 0) {
      error.errorPwd = errorConstant.required
    } else if (password.length >= 8 && strongPassword) {
      delete error.errorPwd
    } else {
      error.errorPwd = errorConstant.needStrongPwd
    }
    if (confirm_password.trim().length === 0) {
      error.errorconfirmpassword = errorConstant.required
    } else if (password === confirm_password ) {
      delete error.errorconfirmpassword
    } else {
      error.errorconfirmpassword = errorConstant.confirmpwd
    }


    setError({ ...error })

    if (Object.keys(error).length > 0)
      return
    setPassword('');
    setConfirm_password('')
    setEmployee_id('');
    setEmail('');
    setCompanyName('');
    setProjectmanagername('');
    setTechnology('');

    const Add_SONG = 'http://localhost:3030/signup';
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({

      "employee_id": employee_id,
      "email": email,
      "password": password,
      "technology": technology,
      "projectmanagername": projectmanagername,
      "companyname": companyname,
      "confirm_password": confirm_password


    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(Add_SONG, requestOptions)
      .then(response => response.json())
      .catch(error => console.log('error', error));

  }

  return (
    <>

      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <form class="login">
              <h2 className="main1">{Regconstants.RegistrationFormTitle}</h2>
              <div class="login__field" style={{ display: "flex" }}>
                <FaEnvelope />
                <InputField type="text" placeholder="Email" className='login__input' value={email}
                  onChange={e => setEmail(e.target.value)} title='Please include @ and . in email-id' />
                {error.errorEmail && <span style={{ color: 'red' }}>{error.errorEmail}</span>}
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaUser />
                <InputField type="text" placeholder="EmployeeId" className="login__input" id="exampleInputEmail1"
                  ariaDescribedby="emailHelp" value={employee_id} onChange={(e) => setEmployee_id(e.target.value)} />
                {error.errorID && <span style={{ color: 'red' }}>{error.errorID}</span>}
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaLock />
                <InputField type={passwordType} placeholder="Password" className="login__input" id="exampleInputPassword1"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                {error.errorPwd && <span style={{ color: 'red' }}>{error.errorPwd}</span>}

              </div>

              <div class="login__field" style={{ display: "flex" }}>
                <FaLock />
                <InputField type="text" value={confirm_password} className='login__input' placeholder="Confirm Password"
                  onChange={e => setConfirm_password(e.target.value)}
                />
                {error.errorconfirmpassword && <span style={{ color: 'red' }}>{error.errorconfirmpassword}</span>}

              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <GrTechnology />
                <InputField type="text" className='login__input'
                  placeholder="Technology"
                  onChange={e => setTechnology(e.target.value)}
                />
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaUser />
                <InputField type="text" className='login__input'
                  placeholder="Manager Name"
                  value={projectmanagername}
                  onChange={e => setProjectmanagername(e.target.value)}
                />
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaHome />
                <InputField type="text" className='login__input'
                  placeholder="Company Name"
                  onChange={e => setCompanyName(e.target.value)}
                />
              </div>
              <button class="button login__submit"  type ="button" onClick={() => handleSubmit()}>
                <span class="button__text">{constants.submitButton}</span>
              </button>
              <p className='reg1'> {Regconstants.account}<a href='/'> {constants.loginFormTitle}</a></p>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}

export default Registration