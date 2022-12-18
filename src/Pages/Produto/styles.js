import styled from "styled-components";

export const NavBar=styled.header`
    background-color: orange;
    width: 100%;
    height:5.5rem;
    padding: .5rem;
    display: grid;
    grid-template-columns:2fr 1fr 1fr;

    @media only screen and (min-device-width: 900px){
        grid-template-columns:7fr 0fr 1fr;
        height:4rem;
    }
`

export const Buttons=styled.button`
  margin: 1rem;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  width:5rem;
  height: 1.5rem;
  color: white;
  background-color: RGB(227 184 115);
  border: none;
  transition:.5s;
  cursor: pointer;

  &:hover{
    width: 5.5rem;
    height: 1.8;
    transition:.5s;
    color: black;
  }
`
export const ProdutoContainer=styled.div`
  width: 100%;
  height:auto;
  padding: 2rem;

  & *{
    margin: 1rem;
  }

  & h3{
    padding:.5rem;
    border: 1px solid black;
    margin-top: 4rem;
    max-width: 52rem;
  }

  & div{
    border: 1px solid black;
    width: 25rem;
    height: 16rem;
    margin-top: -21rem;
    margin-left: 30rem;

    & h4{
      color:orange;
    }
  }

  & button{
        border: none;
        width: 7rem;
        height: 2.5rem;
        border-radius: 8px;
        background-color: orange;
        cursor: pointer;
        transition: .5s;

        &:hover{
          padding-left:.8rem;
        }
  }
  
  
` 