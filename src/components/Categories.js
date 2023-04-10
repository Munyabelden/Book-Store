import PropTypes from 'prop-types';

const Category = () => {
  return (
    <div className="Category">
       <h2>Status</h2>
       <Button type="button" name="Check Status" key="Check Status"/>
    </div>
  );
}

const Button = ({ name }) => {
  return (<button type={name} key={name}>{name}</button>);
}

Button.prototype = {
  name: PropTypes.string.isRequired,
}

export default Category;