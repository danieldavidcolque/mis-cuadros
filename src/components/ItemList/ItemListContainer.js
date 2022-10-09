import ItemList from './ItemList';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../utils/products';



const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams();
    const [products, setProducts]= useState([]); // los datos de un recurso externo los guardo en un estado, en el segundo N2 se monta
    
    // se va a actualizar cuando cambia la categoria
    useEffect(()=> {  //una vez que el componente está montado traemos los datos con useEffect
        if (categoryId) {
            getProductsByCategory(categoryId)
                .then((data)=> setProducts(data))
                .catch((error)=> console.warn(error))
        }else{
            getAllProducts()
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    },[categoryId])
                    
    return ( 
        <Container>
            <h1>Obras</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products}/>

        </Container>
    );
}

 
export default ItemListContainer;
