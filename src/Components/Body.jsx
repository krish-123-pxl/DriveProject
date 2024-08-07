import React from "react";
import styled from "styled-components";
import FormControls from "./FormControls.jsx";
import img from "../assets/bg.jpg";

export default function Body(){

    const BodyContainer = styled.div`
        display:flex;
        justify-content:End;
        padding-right:3rem;
        background-image:url(${img});
        height:90vh;
        background-position:center;
        background-size:cover;
    `;


    return (
        <>
        <BodyContainer>
            <FormControls/>
        </BodyContainer>
            
        </>
    );
}