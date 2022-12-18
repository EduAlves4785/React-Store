import {CardProduto} from './styles'

const CardProdutos=({marca,modelo,valor,imagem,id})=>{
    
    const url=`http://localhost:5000/carrinho/${id}`

    function deleteProduto(){
        fetch(url, { method: 'DELETE' })
    }
    
    return(
        <CardProduto>
            <h2>{marca} {modelo}</h2>
            <img src={imagem} width="120px"/>
            <h3>R${valor}</h3>
            <button onClick={()=>{deleteProduto()}}>Remover</button>
        </CardProduto>
    )
}

export {CardProdutos}