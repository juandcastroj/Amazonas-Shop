import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsync } from '../../redux/actions/actionProducts'

const List = () => {

    const dispatch = useDispatch()
    const { products } = useSelector(store => store.product)
    //console.log(products);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {products.map((e, i) => (
                    <Col key={i} >
                        <Card>
                            <Card.Img variant="top" src={e.imagen} />
                            <Button variant="outline-info" onClick={handleShow}>  Detalle    </Button>
                            <Card.Body>
                                <h4>{e.nombre}</h4>
                                <h5>precio: {e.precio}</h5>
                                <h6>{e.descripcion}</h6>
                                <Card.Text>
                                    {e.codigo}
                                </Card.Text>
                                <Button variant="outline-danger" onClick={() => dispatch(deleteAsync(e.nombre))} > Eliminar  </Button>
                                <Button variant="outline-success" >   Agregar al carrito    </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <>
                {products.map((e, i) => (
                    <Modal show={show} onHide={handleClose} key={i} >
                        <Modal.Header >
                            <Modal.Title>{products.nombre}</Modal.Title>
                        </Modal.Header  >
                        <Card.Img variant="top" src={e.imagen} />
                        <Modal.Body  >
                            <h4>{e.nombre}</h4>
                            <br></br>
                            <h5>precio: {e.precio}</h5>
                            <h6>{e.descripcion}</h6>
                            <Card.Text>
                                {e.codigo}
                            </Card.Text>
                        </Modal.Body>
                        <Modal.Footer>

                            <Button variant="outline-success" onClick={handleClose}>
                                Agregar al carrito
                            </Button>
                        </Modal.Footer>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                    </Modal>
                ))}
            </>
        </div>
    )
}

export default List