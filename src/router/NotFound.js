import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <main>
            <h1>404 Not found</h1>
            <Link to='/'>Return to home page</Link>
        </main>
    )
}

export default NotFound
