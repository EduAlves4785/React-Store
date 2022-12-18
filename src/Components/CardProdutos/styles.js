import styled from "styled-components";

export const CardProduto=styled.div`
  border: 3px solid orange;
  width: 15rem;
  height:auto;
  margin:.5rem;

  & *{
    margin:.5rem;
  }

  & button{
    cursor: pointer;
    border: none;
    background-color: orange;
    width: 5rem;
    height: 2rem;
    transition:.5s;
    border-radius: 10px;

    &:hover{
      box-shadow: 8px 5px 5px black;
      background-color: red;
    }
  }
`