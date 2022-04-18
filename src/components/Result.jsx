const x = 'clear'

const Result = ({ winner, turn }) => {

    const turn_style = {
        backgroundColor: 'transparent',
        color: turn == x ? '#ef4444' : '#059669'
    }

    const win_style = {
        backgroundColor: winner == x ? '#FFB5B5' : '#A6CF98',
        color: winner == x ? '#ef4444' : '#059669'
    }

    return (
        <div className="result_container">
            <p>{ winner ? 'Winner' : 'Next turn'}</p>
            <div className="result" style={winner ? win_style : turn_style}>
                <span class="material-icons-outlined">{ winner ? winner : turn }</span>
            </div>
        </div>
    )
}

export default Result
