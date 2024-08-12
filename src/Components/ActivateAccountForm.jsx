import React, { useState } from "react";
import UserInput from "./UserInput";
import styled from "styled-components";
import LoginButton from "./Button";
import ActivationFun from "../utils/ActivationFun";


const InputBox = styled.div`
        margin-bottom:13px;
    `;
const Form = styled.div`
        width:33%;
        box-shadow:0px 0px 6px #ccc;
        margin-top:80px;
        margin-right:50px;
        padding:2rem;
        box-shadow:0px 0px 10px #fff;
        height:35vh;
        background-color:#fff;
        border-radius:7px;
    `;
export default function ActivateAccountForm(props) {
    const [actCode, setActCode] = useState();
    const [status, setStatus] = useState(false);
    const [msg, setMsg] = useState('');
    const [errorStatus,setErrorStatus] = useState(false);

    const handleChange = (e) => {
        setActCode(e.target.value);
    }
    const handleActivation = () => {
        // console.log(props.email);
        ActivationFun(props.email,actCode,setStatus,setErrorStatus,setMsg,props.setTabs);
    }

    return (
        <Form>
            <InputBox>
                <UserInput placeholder="Enter Activation Code:" value={actCode} type="number" htmlFor="activate" onChange={handleChange} text="Activate Account:" name="act_code" id="activate" />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LoginButton style={{ width: '80%' }} onClick={handleActivation}>Activate Account</LoginButton>
                </div>
                {status ? <h2 style={{ color: 'green', textAlign: 'center' }}>{msg}</h2> : undefined}
                {errorStatus ? <h2 style={{ color: 'red', textAlign: 'center' }}>{msg}</h2> : undefined}
            </InputBox>
        </Form>
    );
}