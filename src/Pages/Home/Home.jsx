import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../Components/Card/Card'
import {NavBar,Buttons,ItensContainer,ItensFilter} from './styles'

const Home=()=>{

    const url='http://localhost:5000/smartphones'
    const[itens,setItens]=useState([])
    const[selectValue,setSelectValue]=useState()
    const list=[
        {id:1,name:"Samsung"},
        {id:2,name:"Motorola"},
        {id:3,name:"Apple"},
        {id:4,name:"Xiaomi"}
    ]

    useEffect(()=>{
        fetch(url)
        .then(async response=>{
            setItens(await response.json())
        })
    },[selectValue])

    function filtrar(){
       const items=itens.filter(item=>item.marca===selectValue)
       setItens(items)
    }

    function handleCreate(e) {
        e.preventDefault()
      }

    return(
        <>
            <NavBar>
                <h1>React Store</h1>
                <Link to="/"><Buttons>Home</Buttons></Link>
                <Link to="/carrinho"><Buttons>Carrinho</Buttons></Link>
            </NavBar>
            <ItensFilter>
                <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                    {list.map((item)=><option key={item.id} value={item.name}>{item.name}</option>)}
                </select>
                <button onClick={()=>filtrar()}>Filtrar</button>
            </ItensFilter>
            <ItensContainer>
                {itens.length>0&& itens.map((item)=><Card  key={item.index} id={item.id} nome={item.modelo} marca={item.marca} preco={item.valor} img={item.imagem}/>)}
            </ItensContainer>
        </>
    )
}

export {Home}