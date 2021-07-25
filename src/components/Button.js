import PropTypes from 'prop-types' 


const Button = ({color, text}) => {
const onClick =(e) => {
    console.log(e)
}
    return (
        <button
            onClick={{onClick}}
            style={{backgroundColor: 'color'}}
            className='btn'>
                {text}
        </button>
    )
}

Button.defaultProps ={
    title: 'Search',

}
Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}



export default Button
