import { useState } from "react"
import "../static/css/Board.css"

const blank_boxes = Array(9).fill(null)

// From react's official doc
const check_winner = (board) => {
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	]

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i]
		if (board[a] && board[a] === board[b] && board[a] === board[c]) {
			return board[a]
		}
	}

	return null
}

const Board = () => {
    const [board, setBoard] = useState(blank_boxes)
    const [turn, setTurn] = useState("x")
    const winner = check_winner(board)

    const pencil = (box_index) => {
        // Do nothing if clicked box is pre-filled or got a winner
        if (board[box_index] || winner) return

        const board_copy = [...board]
        
        board_copy[box_index] = turn

        setBoard(board_copy)
        setTurn(turn == "x" ? "o" : "x")
    }

    return (
        <div className="container">
            {board.map(
                (value, index) => <button key={index} onClick={() => pencil(index)}>{value}</button>
            )}
        </div>
    )
}

export default Board
