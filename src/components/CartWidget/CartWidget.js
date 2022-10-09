import './CartWidget.css'; //Los archivos que no son JS hay q ponerles la extensión
import {TiShoppingCart} from 'react-icons/ti';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (  
        <Link to="/cart">
            <TiShoppingCart/>
        </Link>   
    );
}
 
export default CartWidget;