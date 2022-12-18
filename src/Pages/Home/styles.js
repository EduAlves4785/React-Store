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
export const ItensContainer=styled.section`
  padding: 1rem;
  display: grid;
  height: auto;
  grid-template-columns: 1fr 1fr;

  @media only screen and (min-device-width: 900px){
    grid-template-columns:1fr 1fr 1fr 1fr;
  }
`

export const ItensFilter=styled.div`
  padding:.5rem;
  border: 1px solid black;
  width: 100%;
  height: 3rem;

  & button{
    margin-left: 1rem;
    width: 5rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    background-color: RGB(227 184 115);
    transition:.5s;

    &:hover{
      color: white;
      transition:.5s;
      border-radius: 5px;
    }
  }
`