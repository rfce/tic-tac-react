const x = 'clear'

const Result = ({ winner, turn, game_over }) => {

    const turn_x = {
        backgroundColor: turn == x ? 'rgb(239, 68, 68)' : 'rgb(5, 150, 105)',
        color: turn == x ? 'rgb(255, 228, 192)' : 'rgb(185, 248, 211)',
        borderColor: turn == x ? 'rgb(255, 228, 192)' : 'rgb(185, 248, 211)'
    }

    return (
        <div className="result_box">
            { winner ? ( 
                <div className="winner">
                    <span className="material-icons-outlined">
                        emoji_events
                    </span>
                    <p>Winner: <span className="material-icons-outlined">{ winner }</span></p>
                </div>
            ) : game_over ? "Game over" : (
                <div className="turn" style={ turn_x }>
                    <p>Next turn <span className="material-icons-outlined">{ turn }</span></p>
                </div>
            )}
        </div>
    )
}

export default Result
