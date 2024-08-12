import React, { useState } from 'react'
import styled from 'styled-components';
import UserInput from './UserInput';
import { Eye } from "lucide-react";
import LoginButton from './Button';
import LoginFun from '../utils/LoginFun';

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
        LoginFun(data.email,data.password,setMsgFlag,setMsg,setLogedIn,props.setTabs);
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
