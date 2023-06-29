import React,{useState} from 'react'
import "../Styles/Forget.css";
// import Button from '../Components/Button';
import InputField from '../Components/InputField';
import errorConstant from '../Constants/ErrorConstant';
import Regconstants from '../Constants/RegistrationConstant'
import constants from '../Constants/LoginPageConstant'
import { FaEnvelope} from "react-icons/fa";

const Forget = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState({
     
      errorEmail: ''
      
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    
     
        const strongEmail = email.match(validEmail);


        if (email.trim().length === 0) {
          error.errorEmail = errorConstant.required
        } else if (strongEmail) {
          delete error.errorEmail
        } else {
          error.errorEmail = errorConstant.email
        }
        setError({ ...error })
    
        if (Object.keys(error).length > 0) return
    
        
        setEmail('');
  
      }
  return (
  <>


<div class="container2">
	<div class="screen2">
		<div class="screen__content2">
			<form class="login2">
      <h2 className="main3">{Regconstants.reset}</h2>
				<div class="login__field2" style={{display: "flex"}}>
        <FaEnvelope/>
    <InputField type="text"  className='login__input2' value={email} placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} title='Please include @ and . in email-id' />
      {error.errorEmail && <h6 style={{ color: 'red' }}>{error.errorEmail}</h6>}
         
				</div>
				<button class="button login__submit2" onClick={() => handleSubmit()}>
					<span class="button__text2">{constants.submitButton}</span>
				</button>		
			</form>

		</div>
		<div class="screen__background">
			<span class="screen__background__shape screen__background__shape8"></span>
			<span class="screen__background__shape screen__background__shape7"></span>		
			<span class="screen__background__shape screen__background__shape6"></span>
			<span class="screen__background__shape screen__background__shape5"></span>
		</div>		
	</div>
</div>

</>
  )
}

export default Forget