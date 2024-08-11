import { HTTP, URL } from "./http"



const PRODUCTS_ROUTE = '/api/products'
const getProducts = async (productos) => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
    return response.productos
}

const deleteProducts = async (pid) => {


    const response = await HTTP.DELETE(URL.URL_API + PRODUCTS_ROUTE + '/' + pid)

    return response

}

const getProductDetailById = async (pid) => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE + '/' + pid)
    return response.producto
}

const cargarProducto = async (producto) => {
    try {
        const result = await HTTP.POST(URL.URL_API + PRODUCTS_ROUTE + '/', producto)
        if (!result.ok) {
            throw result

        }

    }
    catch (error) {

        throw { message: error.message }
    }
}
const updateProducts = async (updateproducto) => {
    try {
        const result = await HTTP.PUT(URL.URL_API + PRODUCTS_ROUTE + '/:pid', updateproducto)
        if (!result.ok) {
            throw result

        }

    }
    catch (error) {


    }

}


export { getProducts, getProductDetailById, cargarProducto, deleteProducts, updateProducts }
