import React from 'react';

function Search({onSearch, onChange, city=""}){

    const onInputChanged = (event) => {
        const newValue = event.target.value;
        onChange(newValue);
    };

    return (
        <form onSubmit={
            (event) => {
                event.preventDefault();
                console.log("submitted");
                onSearch(city);
            }
        }>
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input id="city"
                       className="form-control"
                       placeholder="City"
                       value={city}
                       onChange={onInputChanged}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Search;