import PropTypes from 'prop-types';

const Input = ({ name, text}) => {
  return(<input type={text} name={name} id= {text} placeholder={name} key={name}/>);
}

Input.prototype = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Input;
