import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'
import { LoginEmailPassword, loginGoogle } from '../redux/actions/actionLogin'

const LogIn = ( ) => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

      const [  values, handleInputChange, reset ] = useForm ({
            email: '' ,
            password: ''        
      })

      const { email, password } = values

      const handleGoogle = () => {
        dispatch(loginGoogle())
        setTimeout(() => {
          navigate('/home')
      },5000)
    }

      const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(LoginEmailPassword(email, password))
        reset()
      }
     

  return (
    <div>
        <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                   
                     />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="true"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                     />
            </Form.Group>
            <Button variant="primary" type="submit"    >
                Entrar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                 onClick={handleGoogle}

                >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" width="100" />
                   
                </Container>
            </Container>
            <Link to="/register">Registrarse</Link>

        </Form>
    </div>
  )
}

export default LogIn