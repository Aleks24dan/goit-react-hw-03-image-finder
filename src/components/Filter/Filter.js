import PropTypes from 'prop-types';
import { Input, LabelInput, label } from '../ContactForm/ContactForm.styled';

const Filter = ({ value, onChange }) => (
  <label>
    <LabelInput>Find contact by name<Input type="text" value={value} onChange={e=>onChange(e.target.value)} onBlur={()=>onChange('')} /></LabelInput>
    
  </label>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
