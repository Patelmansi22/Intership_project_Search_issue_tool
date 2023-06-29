import constants from '../Constants/LoginPageConstant';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '../Components/Button';

const getData = () => {
    let data = localStorage.getItem("issue");
    if(data){
        return data = JSON.parse(data)
    }else{
        return []
    }
}

const getcomment = () => {
    let data = localStorage.getItem("comment");
    if(data){
        return data = JSON.parse(data)
    }else{
        return []
    }
}


const IssueDetails = () => {

    
  
    const {id} = useParams();
    const [data, setData] = useState(getData());
    const [demo, setDemo] = useState(false);
    const [comment, setComment] = useState("")
    const [addComment, setAddComment] = useState(getcomment())


    const resultData = data.find((item)=> item.id == id);
    const userId = data.filter((item,index)=>  {
        if(item.id == id){
            return index+1
        }
    })
    console.log("resultData",userId);

    const newIssueHandler = () => {
        // console.log("...");
        setDemo(true)
    }

    const addCommentHandler =() => {
        if(comment.trim().length <1) return
        setAddComment([{commentID: id,comment:comment},...addComment])
        setComment("")
        setDemo(false)
    }
    console.log("comment",addComment);

    useEffect(()=>{
        localStorage.setItem("comment", JSON.stringify(addComment))
    },[addComment])
    
  return (
    <div>
        <div className="m-5">
        <div className="card" style={{}}>
            <div className="card-body">
                <h5 className="card-title">{resultData.title} #{}</h5>
                <p className="card-text">{resultData.description}</p>
            </div>
            </div>
            <div className="my-4" style={{marginLeft: "160vh"}}>
         {/* <Button className="btn btn-success " dataBsToggle="modal" dataBsTarget="#exampleModal" type="button" onClick={newIssueHandler} name={constants.addComment} />       */}
         <button  className="btn btn-success" dataBsToggle="modal" onClick={newIssueHandler} style={{marginTop:"-190px" , marginLeft:"550px"}}>{constants.addComment}</button>
        </div>
        </div>

        {demo &&
        /* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Comment</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input type="text" value={comment} onChange={(e)=> setComment(e.target.value)} style={{width: "100%"}} />
      </div>
      <div class="modal-footer">
      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
 <button type="button" className="btn btn-primary" onClick={addCommentHandler}>Add</button>
      </div>
    </div>
  </div>
</div> */

<div>
<textarea type='text' className="form-controller" placeholder="description..." onChange={(e)=> setComment(e.target.value)}
  value={comment} style={{marginTop: "8px",width:"30%" ,height:"80px" , marginLeft:"50px"}}/>
 <button type="button" className="btn btn-primary" style={{marginTop:"-140px" , marginLeft:"-10px"}} onClick={addCommentHandler}>Add</button>
     </div>
}

   {addComment.length ==0 && <h4 style={{marginLeft: "5rem", marginTop:"10px"}}>Comments</h4>}
    {
        addComment?.map((item,index)=> {
            if(item.commentID == id){
                return <div class="card my-3" style={{width:"50rem", marginLeft: "50px"}}>
                <div class="card-body">
                  {item.comment}
                </div>
              </div>
            }
        })
    }


      
  
    </div>

    
  )
}

export default IssueDetails