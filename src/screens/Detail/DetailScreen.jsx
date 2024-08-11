import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { deleteProducts, getProductDetailById } from '../../fetching/products.fetching'


const DetailScreen = () => {
    const { pid } = useParams()
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState(null)

    console.log(pid)
    useEffect(() => {
        getProductDetailById(pid)
            .then(producto => {
                setLoading(false)
                setProduct(producto)
            })
    }, [])

    const borrarProducto = () => {
        deleteProducts(pid)

    }





    return (
        <div>
            <h1>Detalle del producto</h1>
            {
                loading ?
                    <h2>Cargando</h2> :
                    <div>
                        <h2>{product.titulo}</h2>
                        <p>{product.descripcion}</p>
                        <button onClick={borrarProducto}>Borrar Producto</button>

                    </div>

            }
        </div>
    )


}
export default DetailScreen