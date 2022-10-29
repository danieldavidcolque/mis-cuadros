import { useContext } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import './OrderModal.css';




const OrderModal = ({ showModal, onClose, onBuy, orderId}) => {


    const { cart, total } = useContext(CartContext);


  return (
    <Modal show={showModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Finalizar comprar</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
            <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    <span className="mx-1">{item.quantity} un </span>
                    <span className="mx-1">$ {item.price}</span>
                    <span className="mx-1"> <>Categoria: {item.category} Nombre: {item.title}</></span>
                </li>
                ))}
            </ul>
            <h5 className="my-2">Total: $ {total}</h5>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            name="email"
            type="email"
            placeholder="Ingrese email" 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail2">
          <Form.Label>Reingrese Email</Form.Label>
          <Form.Control
            name="email2"
            type="email"
            placeholder="Reingrese email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Ingrese nombre"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            name="phone"
            type="text"
            placeholder="Ingrese telefono"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        {!orderId && (
          <>
            <Button variant="secondary" onClick={onClose}>
              Cancelar
            </Button>

            <Button variant="primary" onClick={onBuy} 
            >
              Comprar
            </Button>
          </>
        )}
        {orderId && (
          <div className='footerOrderSuccess'>
            <Alert key='success' variant='success'>
              Numero de orden: {orderId}
            </Alert>
            <Link to='/'>
              <Button variant="success">
                Comprar nuevamente
              </Button>
            </Link>
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}
 
export default OrderModal;

/* {orderId ? (
  <Alert variant="success">{orderId}</Alert>
) : (
  <Button
    type="submit"
    className="checkout__btn"
    disabled={
      Form.name && Form.email && Form.emailValidate && Form.phone
        ? false
        : true
    }
  >
    Generar Orden
  </Button>
)} */