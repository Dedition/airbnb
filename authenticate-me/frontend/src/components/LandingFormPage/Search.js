import React, { useState, useEffect } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

// DATE PICKER COMPONENT
function Search() {
    const [showSearch, setShowSearch] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]}
                onChange={handleSelect} />
            {showSearch && <Search />}
            <button onClick={() => setShowSearch(!showSearch)} className='banner_searchbutton'></button>
            Search
        </div>
    )
}

export default Search
