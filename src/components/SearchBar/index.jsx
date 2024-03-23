import React from 'react';

function SearchBar(){
    return(
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Job Role</option>
                <option value="ioS Developer" >ioS Developer</option>
                <option value="Frontend Developer" >Frontend Developer</option>
                <option value="Backend Developer" >Backend Developer</option>
                <option value="Android Developer" >Android Developer</option>
                <option value="Developer Advocate" >Developer Advocate</option>
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Part Time<" >Part Time</option>
                <option value="Full Time" >Full Time</option>
                <option value="Remote" >Remote</option>
                <option value="On Site" >On Site</option>
                <option value="Hybrid" >Hybrid</option>
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Location</option>
                <option value="Dhaka" >Dhaka</option>
                <option value="Khulna" >Khulna</option>
                <option value="Mymenshing" >Mymenshing</option>
                <option value="Chittagong" >Chittagong</option>
                <option value="Shylet" >Shylet</option>
            </select>

            <select className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher" >Fresher</option>
                <option value="Junior Level" >Junior Level</option>
                <option value="Mid Level" >Mid Level</option>
                <option value="Senior Level" >Senior Level</option>
            </select>

            <button className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
    )
}

export default SearchBar;