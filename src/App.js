import { useState, createContext } from "react"
import { check_winner, game_over } from "./Helpers/board"
import Board from "./components/Board"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./static/css/App.css"

const x = 'clear'

const blank_boxes = Array(9).fill(null)

export const AppContext = createContext()

const App = () => {
    const [board, setBoard] = useState(blank_boxes)
    const [turn, setTurn] = useState(x)
    const { winner, winner_row } = check_winner(board)

    const running = game_over(board)

    return (
        <>
            <AppContext.Provider value={{ winner, turn, running }}>
                <Header />
                <Board
                    board={board}
                    setBoard={setBoard}
                    setTurn={setTurn}
                    winner_row={winner_row}
                />
            </AppContext.Provider>
            <Footer />
        </>
    )
}

export default App;
