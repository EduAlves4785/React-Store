import { Link } from 'react-router-dom'
import {CardContainer}  from './styles'

const Card=({marca,nome,preco,img,id})=>{
    
    const ids=id
    const url=`produto/${id}`

    function formatarValor(valor) {
        return valor.toLocaleString('pt-BR');
    }


    return(
        <CardContainer>
            <img src={img}/>
            <h3>{marca}</h3>
            <h1>{nome}</h1>
            <h2>R$ {formatarValor(preco)}</h2>
            <Link to={url}><button>Detalhes</button></Link>
        </CardContainer>
    )
}

export {Card}