import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import ProductScreen from './screens/product/ProductScreen'
import HomeScreen from './screens/Home/HomeScreen'
import { verificarToken } from './fetching/auth.fetching'
import DetailScreen from './screens/Detail/DetailScreen'
import ProductUpdateScreen from './screens/product/ProductUpdateScreen'


const RouterApp = () => {
	const navigate = useNavigate()
	useEffect(() => {
		verificarToken()
			.then(resultado => {
				if (resultado.status == 200) {
					navigate('/home')
				}
				else {
					navigate('/login')
				}
			})
	}
		, []
	)




	return (
		<Routes>

			<Route path='/login' element={<LoginScreen />} />
			<Route path='/register' element={<RegisterScreen />} />
			<Route path='/' element={<LoginScreen />} />
			<Route path='/home' element={<HomeScreen />} />
			<Route path='/product' element={<ProductScreen />} />
			<Route path='/detail/:pid' element={<DetailScreen />} />
			<Route path='/product/:pid' element={<ProductUpdateScreen />} />

		</Routes>
	)
}

export default RouterApp