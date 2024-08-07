import styled from "styled-components";
import UserInput from "./UserInput";
import LoginButton from "./Button";
import { Eye } from "lucide-react";
import { useState } from "react";
import RandomPassword from "./GenerateRandomPassword";



export default function FormControls() {

    const [password, setPassword] = useState('');
    const [isClicked,setIsClicked] = useState(false);

    const handlePassword = (e) => {
        e.preventDefault();
        let pass = RandomPassword();
        setPassword(pass);
    }
    const handlePasswordVisibility = ()=>{
        setIsClicked(!isClicked);
    }


    const Form = styled.form`
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
    const BottomBox = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
    `;
    const ButtonBox = styled.div`
        display:flex;
        justify-content:center;
        margin-top:20px;
    `;
    return (
        <Form autoComplete="off">
            <h2>Sign Up</h2>
            <UserInput type="text" htmlFor="name" id="name" placeholder="Enter Name:" text="Name:" />
            <UserInput type="email" htmlFor="email" id="email" placeholder="Enter Email id:" text="Email:" />
            <PasswordBox>
                <UserInput type={isClicked?"text":"password"} value={password} htmlFor="password" id="password" placeholder="Enter Password:" text="Password:" />
                <SpanEle><Eye style={{cursor:'pointer'}} onClick={handlePasswordVisibility} /></SpanEle>
            </PasswordBox>
            <BottomBox>
                <p>Form better security Click <strong>Generate</strong></p>
                <LoginButton style={{ backgroundColor: '#ff4242' }} onClick={handlePassword}>Generate</LoginButton>
            </BottomBox>
            <ButtonBox><LoginButton style={{ width: '60%' }}>Login Now !</LoginButton></ButtonBox>
        </Form>

    );
}