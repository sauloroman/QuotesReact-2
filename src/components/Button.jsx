const Button = ({ color, getFeatures}) => {
  return (
    <div 
        onClick={ getFeatures }
        className="button" style={{ backgroundColor: `${color}`}}> 
        <i class='bx bxs-quote-single-right button__icon' ></i>
    </div>
  )
}

export default Button