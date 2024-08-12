import React, { useState } from "react";
import styled from "styled-components";
import SignupForm from "./SignupForm.jsx";
import img from "../assets/bg.jpg";
import ActivateAccountForm from "./ActivateAccountForm.jsx";
import LoginForm from "./LoginForm.jsx";

export default function Body(){
    // const [email,setEmail] = useState("");

    const BodyContainer = styled.div`
        display:flex;
        justify-content:End;
        padding-right:3rem;
        background-image:url(${img});
        height:88vh;
        background-position:center;
        background-size:cover;
    `;


    const [email,setEmail] = useState('');

    const [tabs,setTabs] = useState({signUp:true,activationForm:false,login:false});
    // console.log(tabs);
    
    return (
        <>
        <BodyContainer>
          {tabs.signUp && <SignupForm setTabs={setTabs} tabs={tabs} setEmail={setEmail} />}
            {tabs.activationForm&&<ActivateAccountForm setTabs={setTabs} email={email}/>}
            {tabs.login && <LoginForm setTabs={setTabs} setEmail={setEmail}/>}
        </BodyContainer>
            
        </>
    );
}