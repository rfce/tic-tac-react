import logo from '../static/images/logo.png'
import '../static/css/Header.css'
import Result from './Result'

const Header = ({ winner, turn }) => (
    <header>
        <img src={logo} />
        <h3>Tic tac toe</h3>
        <Result winner={winner} turn={turn} />
    </header>
)

export default Header
