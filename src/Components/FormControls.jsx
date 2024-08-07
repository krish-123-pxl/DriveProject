import styled from "styled-components";
import UserInput from "./UserInput";
import LoginButton from "./Button";

export default function FormControls() {
    const Form = styled.form`
        width:35%;
        box-shadow:0px 0px 6px #ccc;
        margin-top:20px;
        margin-right:20px;
        padding:1.4rem;
        
    
    h2{
        text-align:center;
    }
    p{
        font-size:.8rem;
        
    }
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
        <Form>
            <h2>Sign Up</h2>
            <UserInput type="text" htmlFor="name" id="name" placeholder="Enter Name:" text="Name:"/>
            <UserInput type="email" htmlFor="email" id="email" placeholder="Enter Email id:" text="Email:"/>
            <UserInput type="password" htmlFor="password" id="password" placeholder="Enter Password:" text="Password:"/>
            <BottomBox>
                <p>Form better security Click <strong>Generate</strong></p>
                <LoginButton>Generate</LoginButton>
            </BottomBox>
            <ButtonBox><LoginButton style={{width:'60%'}}>Login Now !</LoginButton></ButtonBox>
        </Form>

    );
}