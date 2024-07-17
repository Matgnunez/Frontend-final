import React, { useEffect, useState } from 'react'
import { getProducts } from '../../fetching/products.fetching'
import './Home.css'

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(
    () => {
      getProducts()
        .then((productos) => {
          setLoading(false)
          setProducts(productos)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    []
  )

  return (
    <div>
      <h1>Libros en Catálogo</h1>
      {
        loading ?
          <h2>Cargando productos</h2>
          :
          <div id="caja2">
            {products.map(product => {
              return (
                <div key={product._id}>
                  <h2>Titulo: {product.titulo}</h2>
                  <p>Descripción: {product.descripcion}</p>
                  <span>Precio $: {product.precio}</span>                                 
                </div>
              )
            })}
          </div>


      }
    </div>
  )
}

export default HomeScreen