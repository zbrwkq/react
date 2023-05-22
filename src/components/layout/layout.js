const Layout = ({ children }) => {
    return (
        <>
            <header>
                <h1>Bonjor, Damien Chauveau à l&apos;appareil.</h1>
                <p>Actuellement Developeur Web.</p>
            </header>
            <main>{children}</main>
            <footer>
                <p>CHAUVEAU DAMIEN © Tout droit réservé</p>
            </footer>
        </>
    )
}

export default Layout
