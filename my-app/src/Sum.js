function Sum(props){
    return(
        <h1>
            {props.numbers.reduce((total, current) => { return (total += current) })}
        </h1>
    )
}
export default Sum