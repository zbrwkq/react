import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>{children}</main>
            <footer>
                <p>CHAUVEAU DAMIEN, 2023  © Tout droit réservé</p>
            </footer>
        </>
    )
}

export default Layout
