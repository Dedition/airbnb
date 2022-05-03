import React, { useState, useEffect } from 'react';
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import { Button, Input } from 'reactstrap';



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
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
            <div className='dateBtn'>
                <h2>Number of guests</h2>
                <div id='dateInput'>
                    <Button>Search Airbnb</Button>
                    <Input type="number" name="guests" min={0} max={10} />
                </div>

            </div>
            {/* <button onClick={() => setShowSearch(!showSearch)} className='banner_searchButton'></button> */}
            {/* {showSearch && <Search />}
            <input min={0} defaultValue={0} type='number' />
            <Button color='primary'>Search</Button> */}
        </div>
    )
}

export default Search
