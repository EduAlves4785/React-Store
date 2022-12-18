import {NavBar,Buttons,CarrinhoContainer,CardProduto} from './styles'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {CardProdutos} from '../../Components/CardProdutos/index'

const Carrinho=()=>{
    const[itens,setItens]=useState([])
    const[valorTotal,setValorTotal]=useState()

    useEffect(()=>{
        fetch(`http://localhost:5000/carrinho`)
        .then(async response=>{
            setItens(await response.json())
        })
    },[itens])

    function useAsync() {
        useEffect(()=>{
            fetch(`http://localhost:5000/carrinho`)
            .then(resp=>resp.json())
            .then(data=>{
            let total=0
            for (let i = 0; i < data.length; i++) {
                total+=data[i].valor
            }
            setValorTotal(total)
        })  
        },[itens])
      }
    useAsync()

    return(
        <>
           <NavBar>
                <h1>React Store</h1>
                <Link to="/"><Buttons>Home</Buttons></Link>
                <Link to="/carrinho"><Buttons>Carrinho</Buttons></Link>
           </NavBar>
           <CarrinhoContainer>
                {itens.length>0&& itens.map((item)=><CardProdutos key={item.id} marca={item.marca} modelo={item.modelo} valor={item.valor} imagem={item.img} id={item.id}/>)}
                <h1>Total a ser pago: R${valorTotal}</h1>
           </CarrinhoContainer>
        </>
    )
}

export {Carrinho}