import './ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return ( 
        <>
            <h1>Obras</h1>
            <h3 className="greeting">{greeting}</h3>
        </>
     );
}
 
export default ItemListContainer;
