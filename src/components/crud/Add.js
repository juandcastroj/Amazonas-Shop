import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { addAsync } from '../../redux/actions/actionProducts'
import { fileUploas } from '../helpers/fileUploas';

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [values, handleInputChange, reset] = useForm({
       nombre: '',
       codigo: '',
       descripcion: '', 
       precio: '',
       imagen: ''

    })
    const { nombre, codigo, descripcion, precio, imagen } = values

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addAsync(values))
        //console.log(nombre, codigo, descripcion, precio, imagen)
        
        reset()
        alert("PRODUCTO AGREGADO")

        setTimeout(() => {
          navigate('/')
      },2000)
    }

    const handleFileChange =(e)=>{
      const file = e.target.files[0]
      fileUploas(file)
          .then(resp =>{
             values.imagen = resp
              console.log(resp)
          })
          .catch(error =>{
              console.log(error.message)
          })
  }


  return (
    <div>
         <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre del producto</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Enter name" value={nombre} onChange={handleInputChange} />

                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="descripcion" placeholder="Enter description" value={descripcion} onChange={handleInputChange} />

                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text" name="codigo" value={codigo} onChange={handleInputChange} />

                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" name="precio" value={precio} onChange={handleInputChange} />

                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="file" name="imagen" value={imagen} placeholder="Ingrese Foto.jpg" onChange={handleFileChange} />
                
                </Form.Group>

                <Button type="submit" variant='success' > Agregar Producto
                    {/* <Image width={40} src='https://res.cloudinary.com/danimel/image/upload/v1646016294/anadir_eitgpy.png' /> */}
                </Button>
            </Form>

            <Link to="/"> volver a inicio</Link>
    </div>
  )
}

export default Add