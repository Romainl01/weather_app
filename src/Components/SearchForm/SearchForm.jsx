import React, {useState, useEffect} from 'react'

export default function SearchForm({onChange}) {

const [location, setLocation] = useState('');

useEffect(() => {
    //console.log(location);
    //if(!location || location==='') return;
    const timeOutId = setTimeout(() => onChange(location), 500);

    return () => clearTimeout(timeOutId);
}, [location]);


    return (
        <div className="mx-auto my-6 h-12 bg-white shadow w-2/6 p-1 flex items-center justify-center rounded-md">
            <span>Select a city : </span>
            <input type="text" 
            placeholder="City"
            required
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="border-b-2 border-blue-300 focus:outline-none ml-3"
            />
        </div>
    )
}
