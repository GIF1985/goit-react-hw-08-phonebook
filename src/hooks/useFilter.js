import { setFilter } from 'redux/contacts/filterSliceActions';
import { getFilter } from 'redux/contacts/contactsHelpers';
import { useSelector, useDispatch } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return [filter, onSetFilter];
};
