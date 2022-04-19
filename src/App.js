import { useState } from "react"
import check_winner from "./Helpers/winner"
import Board from "./components/Board"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./static/css/App.css"

const x = 'clear'

const blank_boxes = Array(9).fill(null)

const App = () => {
    const [board, setBoard] = useState(blank_boxes)
    const [turn, setTurn] = useState(x)
    const winner = check_winner(board)

    return (
        <>
            <Header winner={winner} turn={turn} />
            <Board
                board={board}
                setBoard={setBoard}
                turn={turn}
                setTurn={setTurn}
                winner={winner}
            />
            <Footer />
        </>
    )
}

export default App;
