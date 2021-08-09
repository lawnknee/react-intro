function Tweet(props) {
    const { username, name, date, msg } = props;

    return (
        <div className="tweet">
            <ul>   
                <li> { username } </li>
                <li> {name} </li>
                <li> {date} </li>
                <li> {msg} </li>
            </ul>
        </div>
    )
}