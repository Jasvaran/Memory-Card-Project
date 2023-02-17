import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import uniqid from 'uniqid'
   

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    border: 1px solid black;
    margin-top: 2em;
    height: 400px;
    background: rgba(0, 0, 0, .5)
    `

export default function Cards(props) {

   const { carData } = props
    


    return (
        <Container>
            {carData.map(obj => {
                return <Card data={obj} key={obj.id} />
            })}
        </Container>
    )
}