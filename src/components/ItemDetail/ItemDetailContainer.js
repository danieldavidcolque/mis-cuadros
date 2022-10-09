import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../utils/products";
import ItemDetail from "./ItemDetail";




const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} =useParams();

    useEffect(() => {   //Actualiza el item si cambia el id
        getProduct(id)
            .then((data)=>{
                setProduct(data)
            })
            .catch(error => console.warn(error))
        console.log(id)
    }, [id])
    console.log(product);

    return (  
        <Container>
            <h1>Detalle del producto</h1>
            <ItemDetail product={product} />
        </Container>
    );
}
 
export default ItemDetailContainer;
