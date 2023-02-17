import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        
        .cartext {
            padding-top: 5px;
            box-sizing: border-box;
            text-align: center;
            background-color: #9fa9a3;
            width: 100%;
            height: 2em;
        }
    `

const Image = styled.img`
        height: 200px;
        width: 350px;
        cursor: pointer;

`



export default function Card(props) {

    
    
    return (
        <Container>
            <Image src={props.data.src} />
            <div className="cartext">{props.data.car}</div>
        </Container>
    )
}