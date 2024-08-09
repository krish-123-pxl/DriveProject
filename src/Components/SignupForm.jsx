import styled from "styled-components";
import UserInput from "./UserInput";
import LoginButton from "./Button";
import { Eye } from "lucide-react";
import {  useState } from "react";
import Loader from './Loader'
import RandomPassword from "./GenerateRandomPassword";


const Form = styled.div`
        width:36%;
        box-shadow:0px 0px 6px #ccc;
        margin-top:20px;
        margin-right:50px;
        padding:2rem;
        box-shadow:0px 0px 10px #fff;
        height:80vh;
        background-color:#fff;
        border-radius:7px;
        
    
        h2{
            text-align:center;
        }
        p{
            font-size:.8rem;
            
        }
    `;
const PasswordBox = styled.div`
        position:relative;
        `;
const SpanEle = styled.span`
            position:absolute;
            top:30px;
            right:10px;
        `;
const InputBox = styled.div`
        margin-bottom:13px;
    `;
const BottomBox = styled.div`
        display:flex;
        justify-content:center;
        align-items:center;
        margin-block:20px;
    `;

export default function FormControls(props) {

    const [isClicked, setIsClicked] = useState(false);
    const [error, setError] = useState({});
    const [errorFlag, setErrorFlag] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [msg, setMsg] = useState('');
    const [status, setStatus] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const handlePassword = (e) => {
        e.preventDefault();
        let pass = RandomPassword();
        setData({
            ...data,
            password: pass
        })
    }
    const handlePasswordVisibility = () => {
        setIsClicked(!isClicked);
    }
    const newError = {};
    const validateData = () => {
        if (!errorFlag) {
            if (data.name == "") {
                newError.name = "name can't be empty !";
                setErrorFlag(false);
            }
            else if (!isNaN(data.name)) {
                newError.email = "name can't be a digit !";
                setErrorFlag(false);
            }
            else {
                newError.email = "";
                setErrorFlag(true);
            }
            if (data.email == "") {
                newError.email = "please enter an email";
                setErrorFlag(false);
            }
            else if (!data.email.includes('@')) {
                newError.email = "'@' symbol is missing";
                setErrorFlag(false);
            }
            else {
                newError.email = "";
                setErrorFlag(true);
            }
            if (data.password == "" || data.password.length < 8) {
                newError.password = "please enter minimum 8 characters !"
                setErrorFlag(false);
            }
            else {
                newError.password = "";
                setErrorFlag(true);
            }
            setError(newError);
        }
    }


    const handleSubmitRequest = () => {

        validateData();

        if (errorFlag) {
            const formdata = new FormData();
            formdata.append("name", data.name);
            formdata.append("email", data.email);
            formdata.append("password", data.password);

            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            setStatus(true);

            fetch("http://localhost/stpdrive/api/user/create.php", requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    if (result.message == "sent") {
                        console.log("sent")
                        props.setEmail(data.email);
                        props.setTabs({ signUp: false, activationForm: true });
                    }
                    if(result.message == "present"){
                        setStatus(false);
                        setMsg("Email Allready Registered !");
                    }
                    else{
                        setStatus(false);
                        setMsg("Registration failed");
                    }
                })
                .catch((error) => {console.error(error)
                    setStatus(false)
                });
        }
    }

    return (
        <Form autoComplete="off">
            <h2>Sign Up</h2>
            <InputBox>
                <UserInput name="name" onChange={handleInputChange} value={data.name} type="text" htmlFor="name" id="name" placeholder="Enter Name:" text="Name:" />
                <span><p className="errorMsg">{error.name}</p></span>
            </InputBox>
            <InputBox>
                <UserInput name="email" onChange={handleInputChange} value={data.email} type="text" htmlFor="email" id="email" placeholder="Enter Email id:" text="Email:" /><p className="errorMsg">{error.email}</p>
            </InputBox>
            <PasswordBox>
                <UserInput onChange={handleInputChange} name="password" type={isClicked ? "text" : "password"} value={data.password} htmlFor="password" id="password" placeholder="Enter Password:" text="Password:" /><p className="errorMsg">{error.password}</p>
                <SpanEle><Eye style={{ cursor: 'pointer' }} onClick={handlePasswordVisibility} /></SpanEle>
            </PasswordBox>
            <BottomBox style={{justifyContent:'space-between'}}>
                <p>Form better security Click <strong>Generate</strong></p>
                <LoginButton style={{ backgroundColor: '#ff4242' }} onClick={handlePassword}>Generate</LoginButton>
            </BottomBox>
            <BottomBox>{status?<Loader/>:<LoginButton disabled={status?true:false} onClick={handleSubmitRequest} style={{ width: '60%'}}>Login Now !</LoginButton>}</BottomBox>
            {status?'':<h3 style={{color:'red',textAlign:'center'}}>{msg}</h3>}
        </Form>
    );
}