
import { setFilter } from 'redux/filtersSlice';
import { FilterLabel, FilterInput } from './Filter.styled'; 
import { useDispatch } from 'react-redux';

export default function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <FilterLabel htmlFor="1">Find contacts by name</FilterLabel>
      <FilterInput
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        onChange={handleChangeFilter}
      />
    </>
  );
}