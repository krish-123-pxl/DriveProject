import React, { useState } from 'react'
import styled from 'styled-components';
import UserInput from './UserInput';
import { Eye } from "lucide-react";
import LoginButton from './Button';



const Form = styled.div`
        width:36%;
        box-shadow:0px 0px 6px #ccc;
        margin-top:70px;
        margin-right:50px;
        padding:2rem;
        box-shadow:0px 0px 10px #fff;
        height:57vh;
        background-color:#fff;
        border-radius:7px;
        
    
        h2{
            text-align:center;
        }
        p{
            font-size:.8rem;
            
        }
    `;
const SpanEle = styled.span`
            position:absolute;
            top:30px;
            right:10px;
        `;
const PasswordBox = styled.div`
        position:relative;
        `;
        const LoginForm = (props) => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });

    }
    const [isClicked, setIsClicked] = useState(false);
    const [msgFlag,setMsgFlag] = useState(false);
    const [msg, setMsg] = useState('');
    const [logedIn,setLogedIn] = useState(false);

    const handleClick = () => {
        const formdata = new FormData();
        formdata.append("email", data.email);
        formdata.append("password", data.password);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch(`http://localhost/stpdrive/api/user/login.php?email=${data.email}&password=${data.password}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.message);
                if(result.message == "notfound"){
                    setMsgFlag(true);
                    setMsg("Email Not Registered !");
                }
                else if(result.message == "wrong"){
                    setMsgFlag(true);
                    setMsg("Wrong Password !");
                }
                else if(result.message == "pending"){
                    setMsgFlag(true);
                    setMsg("Account Not Activated !");
                    setTimeout(() => {
                        {props.setTabs({signUp:false,activationForm:true,login:false})}
                    }, 1200);
                }
                else if(result.message == "active"){
                    setMsgFlag(false);
                    setLogedIn(true);
                    setMsg("login Successfully !");

                    // redirection here
                }
            })
            .catch((error) => console.error(error));
    }
    return (
        <Form>
            <h2>Log in</h2>
            <UserInput htmlFor="email" text="Email:" onChange={handleChange} value={data.email} type='text' name="email" placeholder="Enter Email id:" id="email" />
            <PasswordBox>
                <UserInput onChange={handleChange} name="password" type={isClicked ? "text" : "password"} value={data.password} htmlFor="password" id="password" placeholder="Enter Password:" text="Password:" />
                <SpanEle><Eye style={{ cursor: 'pointer' }} onClick={() => { setIsClicked(!isClicked) }} /></SpanEle>
            </PasswordBox>
            <div style={{ textAlign: 'center' }}><LoginButton onClick={handleClick} style={{ width: '60%' }}>Login Now !</LoginButton></div>
            {msgFlag?<h2 style={{color:msgFlag?'red':'green',textAlign:'center'}}>{msg}</h2>:null}
            {logedIn?<h2 style={{color:'green',textAlign:'center'}}>{msg}</h2>:null}
        </Form>
    );
}

export default LoginForm
