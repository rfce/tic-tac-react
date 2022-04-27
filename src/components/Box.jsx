const x = 'clear'

const Box = ({ index, value, pencil, highlight }) => {
    let color = value == x ? 'red' : 'green'

    if (highlight) {
        color += '-highlight'
    }

    return (
        <button 
            className={ value && color }
            onClick={() => pencil(index)}>
            <span className="material-icons-outlined">{value}</span>
        </button>
    )
}

export default Box
