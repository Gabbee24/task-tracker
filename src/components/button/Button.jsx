import './Button.css';

const Button = ({color,text, buttonClass, toggleBtnAdd}) => {
  return (
    <button 
        className={`btn ${buttonClass}`}
        style={{backgroundColor: color}}    
        onClick={toggleBtnAdd}
    >
        {text}
    </button>
  )
}

export default Button