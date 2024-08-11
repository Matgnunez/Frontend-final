
import React, { useEffect, useState } from 'react'
import { getProducts } from '../../fetching/products.fetching'

import './Home.css'
import { Link } from 'react-router-dom'


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
      <Link to={'/product'}>Cargar Producto</Link>
      {

        loading ?
          <h2>Cargando productos</h2>
          :
          <div id="caja2">
            {products.map(product => {
              return (
                <div key={product._id}>
                  <h2>Titulo: {product.titulo}</h2>
                  <p>Identificación: {product._id}</p>
                  <p>Descripción: {product.descripcion}</p>
                  <p>Precio $: {product.precio}</p>
                  <Link to={'/detail/' + product._id}>Eliminar</Link>
                  <p>
                    <Link to={'/Product/' + product._id}>Modificar</Link>
                  </p>
                </div>

              )

            })}

          </div>

      }
    </div>


  )





}

export default HomeScreen