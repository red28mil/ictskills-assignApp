import PropTypes from 'prop-types'
import Button from './Button'
import Navbar from './Navbar'


const Header = ({title}) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <h2>Any drink or cocktail you would like serach here</h2>
           <button className='btn' Search Beverages
             onClick= {onClick}/>
        </header>
    
    )
}

Header.defaultProps = {
    title: 'Drinks Cabinet',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
