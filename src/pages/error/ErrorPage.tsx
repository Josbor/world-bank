import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
    <div>
        <p>La Pagina no existe por favor vuelva a la pagina principal</p>
        <Link to='/' >
            <button> go to Home</button>
        </Link>
    </div>
    )
}

export default ErrorPage