const Section = ({ title, children }) => {
    return (
        <section className='list-group mb-3 container'>
            <h2 className='list-group-item active'>{title}</h2>
            {children}
        </section>
    )
}

export default Section
