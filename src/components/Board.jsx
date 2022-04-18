import { useState } from "react"
import Result from "./Result"
import check_winner from "../Helper"
import "../static/css/Board.css"

const x = 'clear'
const o = 'fiber_manual_record'

const blank_boxes = Array(9).fill(null)

const Board = () => {
    const [board, setBoard] = useState(blank_boxes)
    const [turn, setTurn] = useState(x)
    const winner = check_winner(board)

    const pencil = (box_index) => {
        // Do nothing if clicked box is pre-filled or got a winner
        if (board[box_index] || winner) return

        const board_copy = [...board]
        
        board_copy[box_index] = turn

        setBoard(board_copy)
        setTurn(turn == x ? o : x)
    }

    return (
        <div className="container">
            <Result winner={winner} turn={turn} />
            <div className="board">
                {board.map((value, index) => 
                    <button key={index} style={{ backgroundColor: value && (value == x ? '#FFB5B5' : '#A6CF98'), color: value && (value == x ? '#ef4444' : '#059669') }} onClick={() => pencil(index)}>
                        <span class="material-icons-outlined">{value}</span>
                    </button>
                )}
            </div>
            <button onClick={() => setBoard(blank_boxes)}>Reset game</button>
        </div>
    )
}

export default Board
