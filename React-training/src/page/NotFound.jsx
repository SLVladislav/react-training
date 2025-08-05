import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/", { replace: true });
        },3000)
    },[navigate])
    return (
        <h1>Page not found. Returning to the main page...</h1>
    )
}

export default NotFound