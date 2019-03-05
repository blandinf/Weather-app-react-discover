import React from 'react';

function Data (props){
    const {cities=[]} = props;

    return (
        <div className="list">
            { cities.map((city, index) => {
                return (
                    <h4 key={index}>{city}</h4>
                )
            })}
        </div>
    )
}

export default Data;