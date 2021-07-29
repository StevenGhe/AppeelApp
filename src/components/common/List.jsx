const List = props => {
    return (
        <ul>
            {(
                props.items && props.items.map((item, index) => (
                    item.text ? (
                        <li key={index}>{item.text}</li>) : (null)

                ))
            )}
        </ul>)
};



export default List;