import React from "react";
import styled from "styled-components";
import FormControls from "./FormControls.jsx";

export default function Body(){

    const BodyContainer = styled.div`
        display:flex;
        justify-content:End;
        padding-right:3rem;
    `;


    return (
        <>
        <BodyContainer>

            <FormControls/>
        </BodyContainer>
            
        </>
    );
}