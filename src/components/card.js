const Card = ({ title, content, img }) => {
    return (
        <div className='card'>
            {img !== undefined ? <img src={img} alt={title} /> : ''}
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}

export default Card
