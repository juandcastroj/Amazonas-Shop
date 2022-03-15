import React from 'react'
import '../style/headersStyle.css'
import logo from '../images/logo-amazon.svg'
import carrito from '../images/section-3.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/actionLogin'


const Header1 = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogOut = () => {

        dispatch(logout())
        setTimeout(() => {
            navigate('/login')
        },1000)

    }


    return (

        <div className="header">
            <div className="contain">
                <div className="col">
                    <Link to="/home" > <img src={logo} alt='' /> </Link>
                </div>
                <div className="col">
                    <ul>
                        <li></li>
                        <Link to="/login"> Log In</Link>
                    </ul>
                </div>
                <div className="col">
                    <li> <input placeholder='Buscar producto' /></li>
                </div>
                <div className="col">
                    <ul>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li></li>
                        <Link to="/add"> Agregar producto</Link>
                    </ul>
                </div>
                <div className="col social">
                    <img src={carrito} alt='' width='85px' />
                </div>
                <div className="clearfix">
                    <Button variant="outline-danger" onClick={handleLogOut}  > Log Out </Button>
                </div>
            </div>
        </div>

    )
}

export default Header1