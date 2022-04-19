import "../static/css/Board.css"

const x = 'clear'
const o = 'fiber_manual_record'

const blank_boxes = Array(9).fill(null)

const Board = ({ board, setBoard, turn, setTurn, winner }) => {

    const pencil = (box_index) => {
        if (board[box_index] || winner) return

        const board_copy = [...board]

        board_copy[box_index] = turn

        setBoard(board_copy)
        setTurn(turn == x ? o : x)
    }

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
            <button onClick={() => setBoard(blank_boxes)}>Reset game</button>
        </div>
    )
}

export default Board
