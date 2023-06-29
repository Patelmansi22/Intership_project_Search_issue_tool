import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom"
import InputField from '../Components/InputField';
import "../Styles/Login.css";
import constants from '../Constants/LoginPageConstant'
import Regconstants from '../Constants/RegistrationConstant'
import { FaUser, FaLock } from "react-icons/fa";
import errorConstant from '../Constants/ErrorConstant';
import { EyeSlash, Eye } from 'react-bootstrap-icons';

// const getLocalstorage = () => {
//   let data = localStorage.getItem("data");
//   if (data) {
//     // return data = JSON.parse(data)
//   } else {
//     return []
//   }
// }
const LoginPage = () => {
  const navigate = useNavigate();
  const [data1, setData1] = useState([]);
  const [passwordType, setPasswordType] = useState("password")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")
  const [error, setError] = useState({
    errorEmail: '',
    errorPwd: ""
  });


  const submitHandler = () => {


    // const validEmployeeID = /^\d{10}$/;
    const validPwd = /[a-z](?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    // const strongNumber = validEmployeeID.test(employee_id);/
    const strongPassword = validPwd.test(password);
    const strongEmail = email.match(validEmail);
    // if (employee_id.trim().length === 0) {
    //   error.errorID = errorConstant.required
    // } else if (employee_id.trim() && strongNumber) {
    //   delete error.errorID
    // } else {
    //   error.errorID = errorConstant.correctId
    // }
    if (email.trim().length === 0) {
      error.errorEmail = errorConstant.required
    } else if (strongEmail) {
      delete error.errorEmail
    } else {
      error.errorEmail = errorConstant.email
    }
    if (password.trim().length === 0) {
      error.errorPwd = 'Required'
    } else if (password.length >= 8 && strongPassword) {
      delete error.errorPwd
    } else {
      error.errorPwd = errorConstant.needStrongPwd
    }

    setError({ ...error })

    if (Object.keys(error).length > 0) return


    setTimeout(() => {
      navigate("/admin");
    }, 1000);

    // const Add_SONG = 'http://192.168.1.246:3000/login';

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // parseInt(employee_id)
    // console.log("emp",typeof(parseInt(employee_id)))
    var raw = JSON.stringify({

      "email":email,
      "password": password,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3030/login", requestOptions)
      .then(response => response.json())
      .then((data) => setData1([data]))
      .catch(error => console.log('error', error));

  }


  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data1));
    // localStorage.setItem("token",  data1[0].token);


  }, [data1]);
  
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
              <h2 className="main2">{constants.loginFormTitle}</h2>
              <div class="login__field1" style={{ display: "flex" }}>
                <FaUser />
                <InputField type="text" placeholder="email" className="login__input1" id="exampleInputEmail1"
                  ariaDescribedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error.errorEmail && <span style={{ color: 'red' }}>{error.errorEmail}</span>}
              </div>
              <div class="login__field" style={{ display: "flex" }}>
                <FaLock />
                <InputField type={passwordType} placeholder="Password" className="login__input1" id="exampleInputPassword1"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                {error.errorPwd && <span style={{ color: 'red' }}>{error.errorPwd}</span>}
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

export default LoginPage
