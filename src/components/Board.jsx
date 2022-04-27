import { useState, useContext } from 'react'
import { AppContext } from "../App"
import Box from './Box'
import "../static/css/Board.css"

const x = 'clear'
const o = 'fiber_manual_record'

const blank_boxes = Array(9).fill(null)

const Board = ({ board, setBoard, setTurn, winner_row }) => {

	const { winner, turn } = useContext(AppContext)

	const [old, setOld] = useState({ board: blank_boxes, turn: x })

	const pencil = (box_index) => {
		if (board[box_index] || winner) return

		setOld({ board, turn })

		const board_copy = [...board]

		board_copy[box_index] = turn

		setBoard(board_copy)
		setTurn(turn == x ? o : x)
	}

	const undo_move = () => {
		setBoard(old.board)
		setTurn(old.turn)
	}

	const string_board = JSON.stringify(board)

	const can_undo = string_board != JSON.stringify(old.board)

	const game_started = string_board != JSON.stringify(blank_boxes)

	return (
		<div className="container">
			<div className="board">
				{ board.map((value, index) => <Box 
												key={index} 
												index={index} 
												value={value} 
												pencil={pencil} 
												highlight={ winner && winner_row.includes(index) } 
											/>
				)}
			</div>
			<div className='settings'>
				{ game_started && !winner && (
						<div className={ can_undo ? 'undo' : 'undo undo-disabled' } onClick={undo_move}>
							<span className="material-icons-outlined">restore</span>
							<button>Undo</button>
						</div>
					)
				}
				<button onClick={() => setBoard(blank_boxes)}>Reset game</button>
			</div>
		</div>
	)
}

export default Board
