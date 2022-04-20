import { useState } from 'react'
import "../static/css/Board.css"

const x = 'clear'
const o = 'fiber_manual_record'

const blank_boxes = Array(9).fill(null)

const Board = ({ board, setBoard, turn, setTurn, winner }) => {

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

	const can_undo = JSON.stringify(board) == JSON.stringify(old.board)

	return (
		<div className="container">
			<div className="board">
				{board.map((value, index) => 
					<button key={index}
						style={{
							backgroundColor: value && (value == x ? '#FFE4C0' : '#B9F8D3'), 
							color: value && (value == x ? '#ef4444' : '#059669') 
						}}
						onClick={() => pencil(index)}>
						<span className="material-icons-outlined">{value}</span>
					</button>
				)}
			</div>
			<div className='settings'>
				{ !winner &&
					JSON.stringify(board) != JSON.stringify(blank_boxes) && (
						<div className='undo' onClick={undo_move} style={{ color: can_undo && '#C7B198', borderColor: can_undo && '#C7B198' }}>
							<span class="material-icons-outlined">
								restore
							</span>
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
