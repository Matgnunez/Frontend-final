import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { updateProducts } from '../../fetching/products.fetching'
import './Product.css'


const ProductUpdateScreen = () => {




    const [errorText, setErrorText] = useState('')
    const navigate = useNavigate()
    const handleSubmit3 = async (event) => {
        try {
            event.preventDefault()
            const updateProducto = {
                titulo: event.target.titulo.value,
                descripcion: event.target.descripcion.value,
                codigo: event.target.codigo.value,
                stock: event.target.stock.value,
                precio: event.target.precio.value,

            }
            await updateProducts(updateProducto)
            setErrorText('')
            navigate('/product/')

        }
        catch (error) {
            setErrorText(error.message)
        }
    }
    return (
        <div id="caja2">
            <form onSubmit={handleSubmit3}>
                <h1>Modificar Productos</h1>
                <div>
                    <label htmlFor="titulo">Ingrese Título:</label>
                    <input placeholder='Título' id='titulo' name='titulo' />
                </div>
                <div>
                    <label htmlFor="descripcion">Ingrese Descripción:</label>
                    <input placeholder='Descripción' id='descripcion' name='descripcion' />
                </div>
                <div>
                    <label htmlFor="precio">Ingrese Precio:</label>
                    <input placeholder='Precio' id='precio' name='precio' />
                </div>
                <div>
                    <label htmlFor="stock">Ingrese Stock:</label>
                    <input placeholder='Stock' id='stock' name='stock' />
                </div>
                <div>
                    <label htmlFor="codigo">Ingrese Código:</label>
                    <input placeholder='Código' id='codigo' name='codigo' />
                </div>

                {
                    errorText
                    &&
                    <span style={{ color: 'red' }}>{errorText}</span>
                }
                <button type='submit'>Modificar</button>

            </form >


        </div >
    )







}

export default ProductUpdateScreen

