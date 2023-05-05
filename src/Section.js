import React, { useState } from 'react';
import axios from 'axios';

function Section() {
    const [value, setValue] = useState()
    const [data, setData] = useState()
    const api_key = "2289e0cb0985961ad12f47c0e2c6d942";

    function formSubmit(e) {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}`)
            .then((result) => {
                console.log(result.data)
                setData(result.data)
            })
    }

    function handleChange(e) {
        setValue(e.target.value)
    }
    return (
        <div className="section">
            <form onSubmit={formSubmit}>
                <h1>Weather App</h1>
                <input type='text' placeholder='Enter Your City' onChange={handleChange}></input>
                <button type='submit'>Get the weather</button>
            </form>
            {
                data ? (<div className='text'>
              <p>{data.name}</p>
              <p>{data.main.temp}</p>
              <img src={`https://flagcdn.com/16x12/${data.sys.country.toLowerCase()}.png`} alt={value}/>
              </div>
                ) : ("")
            }
        </div>
    )
}

export default Section