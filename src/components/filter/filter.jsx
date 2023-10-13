import React from 'react';
import { FilterCont, Label, Input } from './filter.styled';

export const Filter = ({contactData, storeFiltered})=> {
 const handleInputFilter = e => {
    const filterExpression = e.target.value;
    let filterData;
   
    if (filterExpression.length < 3) {
      filterData = contactData;
    }
    
    filterData = contactData.filter(item =>
      item.userName.toLowerCase().includes(filterExpression)
    );
    storeFiltered(filterData);
  };
  
    return (
      <FilterCont>
        <Label>
          Find contacts by name
          <Input type="text" onChange={handleInputFilter} />
        </Label>
      </FilterCont>
    );
  
}
