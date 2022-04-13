import React from 'react'
import { Navigate } from 'react-router-dom';
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
    const email = JSON.parse(localStorage.getItem("user") as string).user.email;
    if (email == "vuong@gmail.com") {
        return props.children
    } else {
        return <Navigate to="/" />
    }
}

export default PrivateRouter