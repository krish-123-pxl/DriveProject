import styled from "styled-components";

const LoginButton = styled.button`
    padding:10px 25px;
    background-color:${"#0d6efd"};
    color:#fff;
    border-radius:6px;
    font-size:1rem;
    border:none;
    cursor:pointer;
    transition:.2s;

    &:hover{
    background-color:#0c58c7;

    }
    `;
export default LoginButton;