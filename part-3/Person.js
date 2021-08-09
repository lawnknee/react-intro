function Person(props) {
  const { name, age, hobbies } = props;
  
  const voteMsg = (age > 18) ? "please go vote!" : "you must be 18";
  // const longName = (name.length)

  return (
    <div>
      <p>Learn some information about this person.</p>
      <ul>
        <li>{ name.slice(0,6) }</li>
        <li>{ age }</li>
        <ul>
          { hobbies.map(h => <li>{h}</li>) }
        </ul>
      </ul>
      <h3>{ voteMsg }</h3>
    </div>
  )
}