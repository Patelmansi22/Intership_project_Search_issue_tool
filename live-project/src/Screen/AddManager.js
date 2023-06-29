import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import Adminsidebar from './Adminsidebar'
import "../Styles/Adminpanel.css";
import { useParams, useNavigate, json, useLocation } from 'react-router-dom';
import Select from 'react-select'
import errorConstant from '../Constants/ErrorConstant';
import constants from '../Constants/EmployeConstant';
import InputField from '../Components/InputField';
const AddManager = () => {

 
  // console.log(">>emp",emp.map((i)=> i.name))
  const [name, setName] = useState("");
  const [data1, setData1] = useState([]);
  const [data, setData] = useState([]);

  const [passwordType, setPasswordType] = useState("password")
  const [isEdit, setIsEdit] = useState(false);
  const [empid, setEmpId] = useState("");
  const [projectmanagername, setProjectmanagername] = useState("");
  const [technology, setTechnology] = useState("react");
  const [Dislayvalue, getvalue] = useState();
  const[select,setSelect]=useState([]);
  const [password, setPassword] = useState("")
  const [confirm_password, setConfirm_password] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    errorconfirmpassword: '',
    errorID: "",
    errorPwd: "",
    errorEmail: ''
  });
  let tn =localStorage.getItem("data")
  tn =JSON.parse(tn)
  let token1 =tn[0]?.token

  let { id } = useParams();
  const navigate = useNavigate();

//   const handleselect = (e) => {
//     getvalue(Array.isArray(e) ? e.map(x => x.value) : []);
// console.log("kk",  getvalue(Array.isArray(e) ? e.map(x => x.value) : []))
//   }
  let tokenVal = JSON.parse(localStorage.getItem("data"))[0].token;
  
  const handleSubmit = (e) => {

    let re = select.map((itm)=> itm.label)
  console.log("select >>", typeof(re.toString()))
    e.preventDefault()
    const validEmployeeID = /^\d{10}$/;
    const validPwd = /[a-z](?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    


    const strongNumber = validEmployeeID.test(empid);
    const strongPassword = validPwd.test(password);
    const strongEmail = email.match(validEmail);

    if (empid?.length === 0) {
      error.errorID = errorConstant.required
    } else if (empid && strongNumber) {
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
    if (isEdit) {
      const EDIT = `http://localhost:3030/admin/maneger/edite/${id}`;
      var myHeaders = new Headers();
      myHeaders.append("Authorization",tokenVal)  ;
      myHeaders.append("Content-Type", "application/json");
  
      var raw = JSON.stringify({
  
  
        "email": email,
        "employee_id": parseInt(empid),
        "name":name,
      "teamName":re.toString(),
        // "password": password,
        "technology": technology,
        "projectmanagername": projectmanagername,
        "companyname": companyname,
        // "confirm_password": confirm_password
  
  
      });
  
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
  
      fetch(EDIT, requestOptions)
        .then(response => response.json())
        .then((data) => console.log("sec",data))
    
        .catch(error => console.log('error', error));
        
        navigate(`/manager`)

    }
   
    setIsEdit(false)
    // setPassword('');
    // setConfirm_password('')
    // setEmail('');
    // setName('');
    // setTechnology('');
    // setCompanyName('')
    // setProjectmanagername('');
    // setEmpId('');
    // localStorage.setItem("mng", JSON.stringify(Array_obj))

    const Add_SONG = 'http://localhost:3030/admin/creatManaeger';
    var myHeaders = new Headers();
    myHeaders.append("Authorization",tokenVal)  ;
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "employee_id":  parseInt(empid),
      "email": email,
      "name":name,
      "password": password,
      "technology": technology,
      "teamName":re.toString(),
      "projectmanagername": projectmanagername,
      "companyname": companyname,
      "confirm_password": confirm_password
    });
console.log("raw",raw)
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(Add_SONG, requestOptions)
      .then(response => response.json())
      .then((data)=>console.log("first",data))
      .catch(error => console.log('error', error));
    // navigate(`/manager`)
  }
  
  useEffect(()=>{


    const Add_SONG = 'http://localhost:3030/admin/getManaeger';
    var myHeaders = new Headers();
    myHeaders.append("Authorization",tokenVal )
  
   
  
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
  
    };
    const data = async( )=> {
      await fetch(Add_SONG, requestOptions)
        .then(response => response.json())
        .then((data)=>setData(data.Manaeges))
        .catch(error => console.log('error', error));
    }
      data();
    },[])



  useEffect(() => {
    setIsEdit(true)
    let s = data?.filter((item)=>item._id===id)
    console.log("first",s)
    setEmail(s[0]?.email)
    setName(s[0]?.name);
    setEmpId(s[0]?.employee_id);
    setTechnology(s[0]?.technology);
    setProjectmanagername(s[0]?.projectmanagername);
    setCompanyName(s[0]?.companyname) 
    
  },[data])

useEffect(()=>{


  const Add_SONG = 'http://localhost:3030/admin/getUser';
  var myHeaders = new Headers();
  myHeaders.append("Authorization",tokenVal)  ;
  myHeaders.append("Content-Type", "application/json");

 

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,

  };

  fetch(Add_SONG, requestOptions)
  .then(response => response.json())
  .then((data)=>setData1(data.Users))
  .catch(error => console.log('error', error));
  
},[])

let main = data1.map((itm) => {
  console.log("ddd",JSON.stringify(itm.projectmanagername))
  return {
        value:itm.projectmanagername,
        label:itm.projectmanagername
      }
    })


  return (
    <div>
      <AdminNavbar />
      <Adminsidebar />
      <main id="main" className="main">

        <div className="pagetitle">

          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="">Home</a></li>
              <li className="breadcrumb-item">employe</li>
            </ol>
          </nav>
        </div>

        <section className="section" style={{ width: "1550px" }}>
          <div className="row">
            <div className="col-lg-6">

              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Add Manager</h5>

                  <form>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.email}</label>
                      <div className="col-sm-10">
                      <InputField type="text" placeholder="Email" className='login__input' value={email}
                  onChange={e => setEmail(e.target.value)} title='Please include @ and . in email-id' />
                {error.errorEmail && <span style={{ color: 'red' }}>{error.errorEmail}</span>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.Name}
                      </label>
                      <div className="col-sm-10">
                      <InputField type="text" className='login__input'
                  placeholder="Name"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
                      </div>
                      
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.Id}</label>
                      <div className="col-sm-10">
                      <InputField type="text" placeholder="EmployeeId" className="login__input" id="exampleInputEmail1"
                  ariaDescribedby="emailHelp" value={empid} onChange={(e) => setEmpId(e.target.value)} />
                {error.errorID && <span style={{ color: 'red' }}>{error.errorID}</span>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.passwordLabel}
                      </label>
                      <div className="col-sm-10">
                      <InputField type={passwordType} placeholder="Password" className="login__input" id="exampleInputPassword1"
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                {error.errorPwd && <span style={{ color: 'red' }}>{error.errorPwd}</span>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.confirmpswd}
                      </label>
                      <div className="col-sm-10">
                      <InputField type="text" value={confirm_password} className='login__input' placeholder="Confirm Password"
                  onChange={e => setConfirm_password(e.target.value)}
                />
                {error.errorconfirmpassword && <span style={{ color: 'red' }}>{error.errorconfirmpassword}</span>}
                      </div>
                    </div>

                    
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.projectmanagername}
                      </label>
                      <div className="col-sm-10">
                      <InputField type="text" className='login__input'
                  placeholder="Manager Name"
                  value={projectmanagername}
                  onChange={e => setProjectmanagername(e.target.value)}
                />
                      </div>
                      
                    </div>
                    <div className="row mb-3">
                      <label htmlFor="inputText" className="col-sm-2 col-form-label">{constants.companyname}
                      </label>
                      <div className="col-sm-10">
                      <InputField type="text" className='login__input'
                  placeholder="Company Name"
                  value={companyname}
                  onChange={e => setCompanyName(e.target.value)}
                />
                      </div>
                      
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">{constants.technology}</label>
                      <div className="col-sm-10">
                        <select class="form-select" onChange={(e) => setTechnology(e.target.value)}>
                          <option value="react">{constants.React}</option>
                          <option value="node" >{constants.Node}</option>
                          <option value="php">{constants.Php}</option>
                          <option value="voip">{constants.Voip}</option>
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-sm-2 col-form-label">Team</label>

                      <div className="col-sm-10">
                        <Select class="form-select" isMulti  defaultValue={select}options={main} onChange={setSelect}>
                        </Select>

                      </div>
                    </div>
                    <div className="row mb-3">

                      <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>{id ? 'Edit Employee' : 'Add Employee'} </button>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>

  )
}

export default AddManager;