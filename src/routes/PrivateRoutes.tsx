import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
    const user  = {token: 'ujsw'}
    return(
        user?.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes