import PropTypes from 'prop-types';
import styled from 'styled-components';

const FilterContainer = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Field = styled.input`
  border: 1px solid #d3d3d3;
  cursor: pointer;
  margin-top: 5px;
  padding: 10px;
  border-radius: 8px;
  font-size: 14px;

  &:focus {
    border-color: #8989f3;
    outline: none;
  }
`;

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <FilterContainer>
      Find contacts by name
      <Field
        type="text"
        value={value}
        onChange={onChangeFilter}
        placeholder="Enter contact"
        aria-label="Search contacts by name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
