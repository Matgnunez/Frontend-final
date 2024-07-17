import { HTTP, URL } from "./http"

const PRODUCTS_ROUTE = '/api/products'
const getProducts = async () => {
    const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE )
    return response.productos
}


export {getProducts}



