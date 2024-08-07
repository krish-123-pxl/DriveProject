import styled from "styled-components";
import  LoginButton from "./Button.jsx";

export default function Header(){
    const Container = styled.div`
        background-color:black;
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:10px 40px;
    `;
    const Logo = styled.div`
        font-size:2rem;
        color:#fff;    
    `;
    
    const Ul = styled.ul`
        display:flex;
        justify-content:center;
        gap:20px;
        font-size:1.0rem;
        color:#fff;
        align-items:center;

        li{
            cursor:pointer;
        }
    `;
    // const LoginButton = styled.button`
    //     padding:10px 25px;
    //     background-color:#0d6efd;
    //     color:#fff;
    //     border-radius:6px;
    //     font-size:1rem;
    //     border:none;
    //     cursor:pointer;
    //     transition:.2s;

    //     &:hover{
    //     background-color:#0b63e4c4;
        
    //     }
    // `;
    

    return (
        <>
        <Container>
            <Logo>Logo</Logo>
                <Ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Contact us</li>
                    <li>About us</li>
                    <LoginButton>Login</LoginButton>
                </Ul>
        </Container>

        </>
    );
}