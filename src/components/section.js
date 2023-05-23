const Section = ({ title, children }) => {
    return (
        <section className='list-group'>
            <h2 className='list-group-item active'>{title}</h2>
            {children}
        </section>
    )
}

export default Section
