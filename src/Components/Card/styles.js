import styled from "styled-components";

export const CardContainer=styled.div`
    border: 1px solid black;
    height: auto;
    padding:.2rem;
    width: 15rem;
    margin: 1rem;
    border-radius: 5px;

    & *{
        margin:.5rem;
    }
    
    & img{
        width: 180px;
        height: 150px;
    }

    & h2{
        color: orange;
    }

    & button{
        border: none;
        width: 5rem;
        height: 2.5rem;
        border-radius: 8px;
        background-color: orange;
        cursor: pointer;
        transition: .5s;

        &:hover{
            color: white;
        }
    }
`