const Card = ({ title, content, img }) => {
    return (
        <div className='card'>
            {img !== undefined ? <img src={img} alt={title}  className="card-img-top"/> : ''}
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}

export default Card
