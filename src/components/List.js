const List = ({ elements }) => {
    const content = elements.map((data) => <li key={data.id}>{data.title}</li>)
    return <ul>{content}</ul>
}

export default List
