import React from "react";
import Button from "../button/Button"
import './Header.css'

const Header = ({btnAdd, setBtnAdd, toggleBtnAdd}) => {

  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button
            toggleBtnAdd = {toggleBtnAdd}
            color={btnAdd ? 'red' : 'green'}
            text={btnAdd ? 'Close Tab' : 'Open Tab'}
        />
    </header>
  )
}

export default Header