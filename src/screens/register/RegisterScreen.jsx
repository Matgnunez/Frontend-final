import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registrar } from '../../fetching/auth.fetching'
import './Register.css'


const RegisterScreen = () => {
    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        try {
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            await registrar(usuario)
            setErrorText('')
            navigate('/login')
        }
        catch (error) {
            setErrorText(error.message)
        }
    }
    return (
        <div id="caja2">
            <form onSubmit={handleSubmit}>
                <h1>Registro</h1>
                <div>
                    <label htmlFor="email">Ingrese su email:</label>
                    <input placeholder='nombre@mail.com' id='email' name='email' />
                </div>
                <div>
                    <label htmlFor="password">Ingrese su contraseña:</label>
                    <input type="text" placeholder='******' id='password' name='password' />
                </div>
                {
                    errorText
                    &&
                    <span style={{ color: 'red' }}>{errorText}</span>
                }
                <button type='submit'>Registrar</button>
            </form>
        </div>
    )
}

export default RegisterScreen