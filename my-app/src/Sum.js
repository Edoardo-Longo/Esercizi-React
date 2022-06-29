function Sum({numbers = [2, 5 ,8, 100]}){
    return(
        <h1>
            {numbers.reduce((total, current) => { return (total += current) })}
        </h1>
    )
}
export default Sum