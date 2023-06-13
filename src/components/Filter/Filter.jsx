import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { FilterLabel, FilterInput } from './Filter.styled'; 

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter.filter); // Отримуємо значення фільтра зі стору

  const handleInputChange = (event) => {
    dispatch(setStatusFilter({ filter: event.target.value })); // Передаємо об'єкт з полем "filter"
  };

  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filterValue} onChange={handleInputChange} />
      </FilterLabel>
    </div>
  );
};

export default Filter;

