
import React, { useEffect, useRef, useState } from 'react'
import "./test.css";
import {  FaEdit} from 'react-icons/fa'
import { Table } from 'react-bootstrap';


const getLocalStorage = () => {
    let list = localStorage.getItem("data");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("data")))
    } else {
        return [];
    }
};
const getName = () => {
    let edit = localStorage.getItem("prevfname");
    if (edit == "undefined") {
        return [];
    }
    let prevfname = JSON.parse(localStorage.getItem("prevfname"))
    if (prevfname) {
        return prevfname
    } else {
        return []
    }
}
const getEdit3 = () => {
    let edit2 = localStorage.getItem("prevlname");
    if (edit2 == "undefined") {
        return [];
    }
    if (edit2) {
        return (edit2 = JSON.parse(localStorage.getItem("prevlname")))
    } else {
        return [];
    }
}
const Test = () => {
    const prevData = useRef(null);
    const prevData1 = useRef(null);
    const [text, setText] = useState(false)

    const [search, setSearch] = useState("");
    const [data, setData] = useState(getLocalStorage());
    const [status, setStatus] = useState("open");
    // const [editstatus, setEditStatus] = useState("close");
    const [isediting, setIsediting] = useState([]);

    const [historyid, setHistoryid] = useState(false);
    const [hisid, setHisid] = useState([]);
    const [hisid1, setHisid1] = useState([]);
    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [editfname, setEditFname] = useState(getName());
    const [editlname, setEditLname] = useState(getEdit3());
    useEffect(() => {

        localStorage.setItem("data", JSON.stringify(data))
        localStorage.setItem("prevfname", JSON.stringify(editfname));
        localStorage.setItem("prevlname", JSON.stringify(editlname));
    })
    useEffect(() => {
        prevData.current = hisid;
        prevData1.current = hisid1;
    }, [hisid, hisid1])
    const handleissue = () => {
        setText(true)
    }
    const handleSubmit = () => {
        // setStatus(status + 1)
        let add = { name: name, symbol: symbol, status: status }
        setData([add, ...data]);

    }
    const editItem = (i) => {
        setText(true)

        setName(i.name);
        setSymbol(i.symbol)
        setIsediting(i);
        setHisid(i.name)
        setHisid1(i.symbol);
    };
    const editItems = (s) => {
        setStatus(s)
        const editItem = data.find((item) => {
            if (item.name == isediting.name && item.symbol == isediting.symbol) {
                return item.name = name,
                    item.symbol = symbol,
                    item.status = s
            }
        });
        console.log(">>>>", editItem);

        setName("")
        setSymbol("")
        setEditFname([...editfname, name]);
        setEditLname([...editlname, symbol]);

        // setEditStatus(editstatus-1)
        // setStatus(status-1)

    }

    const history = (s) => {
        const editItem = data.find((item) => {
            if (item.name == isediting.name && item.symbol == isediting.symbol) {
                return item.name = name,
                    item.symbol = symbol,
                    item.status = s
            }
        });
        //   console.log("first",editItem)

        setHistoryid(true)
        //   localStorage.getItem("prevfname")
        //   localStorage.getItem("prevlname")
    }

    // const open=()=>{
    //     // setStatus(status + 1)

    // }
    // const close=()=>{
    //     setStatus(function(open){
    //         if(open){
    //             return status-1
    //         }else{
    //             return status
    //         }
    //     }
    //     )
    //     setEditStatus(editstatus+1)



    // }
    return (
        <div className='main'>
            <input type="text" value={search} className="search" onChange={(e) => setSearch(e.target.value)} searchs={search} placeholder="SEARCH...." />
            <button  className ="issue"  onClick={handleissue}>Issue create</button>

       

            {text &&
                <>
                    <textarea
                        type='text'
                        className="form-controller"
                        placeholder="title..."
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                        style={{ marginTop: "23px", width: "20%", height: "50px" ,marginLeft:"341px"}}
                    />
                    <textarea
                        type='text'
                        className="form-controller"
                        placeholder="description...."
                        onChange={(e) => setSymbol(e.target.value)}
                        value={symbol}
                        required
                        style={{ marginTop: "8px", width: "20%", height: "50px",marginLeft:"10px"}}
                    />
                    <button onClick={handleSubmit} className="add">add</button>
                    <div class="dropdown">
                <button class="dropbtn" onClick={() => editItems("open")} >edit items</button>
                <div class="dropdown-content">
                    <p onClick={() => editItems("open")}>open</p>
                    <p onClick={() => editItems("close")}>close</p>

                </div>
            </div>

                </>
            }
                    <div class="Box-header d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">

                        <div class="table-list-filters flex-auto d-flex min-width-0">
                            <div class="flex-auto d-none d-lg-block no-wrap">

                                <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
                                    <a  style={{color:"black",textDecoration:"none"}} class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                                        </svg>
                                        <span style={{fontSize:"20px"}} >open:{data.filter((item)=>item.status=="open").length} </span>
                                    </a>

                                    <a  class=""  style={{color:"grey",textDecoration:"none", marginLeft:"20px"}}data-ga-click="Issues, Table state, Closed" data-turbo-frame="repo-content-turbo-frame">
                                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                        </svg>
    <span style={{fontSize:"20px"}} >close :{data.filter((item)=>item.status=="close").length} </span>
                                       
                                    </a>
            <span style={{ fontSize: "20px",marginLeft:"20px" }} >total:{data.filter((item) => item.status == item.status).length} </span>

                                </div>

                            </div>




                        </div>
                    </div>
                    {data.map((val,i)=>{
        return (
        <>
        {i<20 &&
                    <div class="Box-header1 d-flex flex-justify-between" id="js-issues-toolbar" data-pjax="#repo-content-pjax-container" data-turbo-frame="repo-content-turbo-frame">
   
      
<div class="table-list-filters flex-auto d-flex min-width-0" style={{marginTop:"-30px"}}>
    <div class="flex-auto d-none d-lg-block no-wrap">

    <button className='edititem' onClick={() =>editItem(val)}>edit</button>
        <div class="table-list-header-toggle states flex-auto pl-0" aria-live="polite">
            <b  class="" data-ga-click="Issues, Table state, Open" data-turbo-frame="repo-content-turbo-frame">
            {val?.status  == "open" ?
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-issue-opened">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                </svg>:
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check">
                                            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
                                        </svg>
                
                }
                    {val?.symbol}
            </b>
            <br></br>
             {val?.name}
   <br></br>
   <span >{val?.status}</span>
        
           
        </div>

    </div>




</div>
</div>
        }
  </>
        )
       })} 
        </div>
    )
}

export default Test