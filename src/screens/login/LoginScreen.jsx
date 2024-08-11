import React, { useState } from 'react'
import { login } from '../../fetching/auth.fetching'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

const LoginScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value

            }

            await login(usuario)
            setErrorText('')
            navigate('/home')
        }
        catch (error) {

            setErrorText(error.message)
        }
    }
    return (







        <section className="flex-container">
            <div id="caja1">
                <h1 id="titulo">BOOKS Tienda de Libros</h1>



            </div>

            <form onSubmit={handleSubmit} id="caja2">
                <div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='nombre@mail.com' id='email' name='email' />

                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraseña:</label>
                    <input type="text" placeholder='******' id='password' name='password' autocomplete='off' />
                </div>
                {
                    errorText
                    &&
                    <span style={{ color: 'red' }}>{errorText}</span>
                }
                <button type='submit'>Iniciar sesion</button >
                <p>Si no tienes una cuenta</p>
                <span> Registrate ,<Link to={'/register'}>Click aquí</Link></span>

            </form>

        </section>
    )
}

export default LoginScreen