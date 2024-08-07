import React from "react";
import styled from "styled-components";

export default function UserInput(props){
    const Input = styled.input`
        width:100%;
        padding:7px;
        margin-bottom:20px;
    `;
    return (
        <>
            <label htmlFor={props.htmlFor}>{props.text}</label> <br/>
            <Input type={props.type} value={props.value} id={props.id} placeholder={props.placeholder}/>
        </>
    );
}