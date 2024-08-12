import React from "react";
import styled from "styled-components";

const Input = styled.input`
    width:100%;
    padding:7px;
    margin-bottom:20px;
`; 
export default function UserInput(props){
    return (
        <>
            <label htmlFor={props.htmlFor}>{props.text}</label> <br/>
            <Input onChange={props.onChange} name={props.name} type={props.type} value={props.value} id={props.id} placeholder={props.placeholder}/>
        </>
    );
}