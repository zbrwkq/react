const PairedList = ({elements}) => {
    const content = elements.map(data => <><dt>{data.title}</dt><dd>{data.grade}</dd></>)
    
    return (
        <dl>
            {content}
        </dl>
    )
}

export default PairedList
