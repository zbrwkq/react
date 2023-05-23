const List = ({ elements }) => {
    const content = elements.map((data) => <li key={data.id} className="list-group-item">{data.title}</li>)
    return <>{content}</>
}

export default List
