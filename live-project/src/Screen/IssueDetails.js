import constants from '../Constants/LoginPageConstant';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import Button from '../Components/Button';
import "../Styles/Editor.css";
import MyStatefulEditor from "./rte_test";




const IssueDetails = () => {
  let tokenVal = JSON.parse(localStorage.getItem("data"))[0].token;
  // console.log("tokenVal",tokenVal);
  
  // const location = useLocation()
  // const { data } = location.state
  const [val, setVal] = useState("");

  const { id } = useParams();

  const [data, setData] = useState([]);
  const [demo, setDemo] = useState(false);
  // const [comment, setComment] = useState("")
  const [addComment, setAddComment] = useState([])
  const [fetchIssueData, setFetchIssueData] = useState([])
  const [commData, setCommData] = useState([]);
  const [isEdit, setIsEdit] = useState(false)
  const [editData, setEditData] = useState([])

  
  const newIssueHandler = () => {
    setDemo(true)
  }
  const onChange = (value) => {
    setVal(value);
    
  };
  // console.log("vv",id.split(":")[1])

  const addCommentHandler = () => {
    setCommData([...commData,val]);

    if (val.length < 1) return


    if (isEdit) {
      console.log("d", editData);
      const Add_SONG = `http://localhost:3030/comments/edit/${editData._id}`;
      var myHeaders = new Headers();
      // myHeaders.append("Authorization",tokenVal);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "content": val
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch(Add_SONG, requestOptions)
        .then(response => response.json()).then((data) => {
          commData.find((item, index) => {
            if (item._id == data.updated_comment._id) {
              return (item.content = val)
            }
          })
        })
        .catch(error => console.log('error', error));
      setDemo(false)

    } else {
      const Add_SONG = `http://localhost:3030/comments`;
      var myHeaders = new Headers();
      // myHeaders.append("Authorization",tokenVal);
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "content": val,
        "issueId": fetchIssueData._id
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };

      fetch(Add_SONG, requestOptions)
        .then(response => response.json()).then((data) => console.log("addComm", data))
        .catch(error => console.log('error', error));

      setDemo(false);
    }
    setVal("")
  }

  const editCommHandler = (item) => {
    console.log("DD", item);
    console.log("...",item.content);
    setDemo(true);
    setVal(item.content);
    setIsEdit(true)
    setEditData(item);


  }


  useEffect(() => {
 
    var myHeaders = new Headers();
    // console.log("ddd", localStorage.getItem("token"))
    myHeaders.append("Authorization", tokenVal );
    myHeaders.append("Content-Type", "application/json");

    console.log();
    // console.log(commData);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,

    };
    // fetch(`http://localhost:3030/issues/${id1}`, requestOptions).then((res) => res.json()).then((data) => setFetchIssueData(data.Data[0]))
    fetch(`http://localhost:3030/issues/${id.split(":")[1]}`,requestOptions).then((res)=> res.json()).then((data)=> setFetchIssueData(data.Data[0]))
    fetch('http://localhost:3030/comments', requestOptions).then((res) => res.json()).then((data) => setCommData(data.Data))
  }, [addComment, commData, isEdit])
  if(!tokenVal){
    return
      }
  return (
    <div>
      <div className="main5">
        <div className="card" >
          <div className="card-body">
             <h5 className="card-title">{fetchIssueData.title} </h5>
            <p className="card-text">{fetchIssueData.description}</p> 
          </div>
        </div>
        <div className="my-4" style={{ marginLeft: "160vh" }}>
          <Button className="btn btn-success " dataBsToggle="modal" dataBsTarget="#exampleModal" type="button" onClick={newIssueHandler} name={constants.addComment} />
        </div>
      </div>

      {demo == true &&
        <div className=" mx-5" style={{ width: "90%" }}>
          <div className="d-flex row">
          <MyStatefulEditor markup=""   onChange={onChange} />
            <button type="button" className="btn btn-primary my-3" onClick={addCommentHandler}>{isEdit ? constants.editCommentButton : constants.addComment}</button>
          </div>
        </div>
      }

      {commData.length !== 0 && <h4 style={{ marginLeft: "5rem" }}>{constants.commentNameTable}</h4>}
      
        {commData.filter((val) => val.issueId ==   id.split(":")[1])
        .map((item, index) => {
          return (
          <>
          <div class="card my-3" style={{ width: "70rem", marginLeft: "80px" }}  ></div>
            <div class="card-body d-flex justify-content-between">
  <p dangerouslySetInnerHTML={{ __html:  item.content  }}></p>
              <button type="button" className="btn btn-outline-warning" onClick={() => editCommHandler(item)}>{constants.editCommentButton}</button>
            </div>
          </>)

        }) }
      
    </div>
  )
}

export default IssueDetails

