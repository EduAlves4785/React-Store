import {NavBar,Buttons,ProdutoContainer} from './styles'
import { Link, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'

const Produto=()=>{

    const {id}=useParams()
    const url=`http://localhost:5000/smartphones/${id}`
    const[itens,setItens]=useState([])
    
    useEffect(()=>{
        fetch(url)
        .then(async response=>{
            setItens(await response.json())
        })
    },[])
    
    function adicionarProduto(){
        fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            const produto={
                marca:data.marca,
                modelo:data.modelo,
                valor:data.valor,
                img:data.imagem,
                id:data.id
            }
            fetch('http://localhost:5000/carrinho', {
                method: "POST",
                body: JSON.stringify(produto),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
        })
        window.alert("Produto adicionado!")
    }

    function formatarValor(valor) {
        return valor.toLocaleString('pt-BR');
    }

    return(
        <>
            <NavBar>
                <h1>React Store</h1>
                <Link to="/"><Buttons>Home</Buttons></Link>
                <Link to="/carrinho"><Buttons>Carrinho</Buttons></Link>
            </NavBar>
            <ProdutoContainer>
                <h1>{itens.marca} {itens.modelo}</h1>
                <img src={itens.imagem} width="400px" height="300px"/>
                <div>
                    <h1>A partir de R${itens.valor}</h1>
                    <h2>Parcelamos em até 12x sem juros!</h2>
                    <h4>Restam {itens.quantidade} unidades</h4>
                    <button onClick={()=>adicionarProduto()}>Adicionar ao carrinho</button>
                </div>
                <br></br>
                <h3>{itens.sobre}</h3>
            </ProdutoContainer>
        </>
    )
}

export {Produto}