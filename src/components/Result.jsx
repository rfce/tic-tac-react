import { useContext } from "react"
import { AppContext } from "../App"

const x = 'clear'

const Result = () => {

    const { winner, turn, running } = useContext(AppContext)

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
            ) : running ? "Game over" : (
                <div className="turn" style={ turn_x }>
                    <p>Next turn <span className="material-icons-outlined">{ turn }</span></p>
                </div>
            )}
        </div>
    )
}

export default Result
