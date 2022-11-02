import Button from "../button/Button"
import './Header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button
            color='green'
            text='Add'
        />
    </header>
  )
}

export default Header