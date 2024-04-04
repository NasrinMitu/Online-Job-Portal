import React from 'react';
import { useState } from 'react';

function SearchBar(props){

    const [jobCriteria, setJobCritera] = useState({
         title: "",
         location: "",
         experience: "",
         type: "",
    })

    const handleChange = (e) => {
        setJobCritera ((prevState) => ({
            ...prevState,
            // [e.target.name]:[e.target.value]
            [e.target.name]: e.target.value

        }))

    }

    

    // console.log(jobCriteria)
    const search = async() => {
        await props.fetchJobsCustom(jobCriteria);
        console.log("criteria are", jobCriteria)
}


    return(
        <div className='flex gap-4 my-10 justify-center px-10'>
            <select onChange={handleChange} name='title' value={jobCriteria.title}  className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Job Role</option>
                <option value="ioS Developer" >ioS Developer</option>
                <option value="Frontend Developer" >Frontend Developer</option>
                <option value="Backend Developer" >Backend Developer</option>
                <option value="Android Developer" >Android Developer</option>
                <option value="Developer Advocate" >Developer Advocate</option>
            </select>

            <select onChange={handleChange} name='type' value={jobCriteria.type} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Job Type</option>
                <option value="Part Time<" >Part Time</option>
                <option value="Full Time" >Full Time</option>
                <option value="Contract">Contract</option>
                 
            </select>

            <select onChange={handleChange} name='location' value={jobCriteria.location} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Location</option>
                <option value="Remote">Remote</option>
                <option value="In-Office">In-Office</option>
                <option value="Hybrid">Hybrid</option>
            </select>

            <select onChange={handleChange} name='experience' value={jobCriteria.experience} className='w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md' >
                <option value="" disabled hidden selected>Experience</option>
                <option value="Fresher" >Fresher</option>
                <option value="Junior Level" >Junior Level</option>
                <option value="Mid Level" >Mid Level</option>
                <option value="Senior Level" >Senior Level</option>
            </select>

            <button onClick={search} className='w-64 bg-blue-500 text-white font-bold py-3 rounded-md'>Search</button>
        </div>
    )
}

export default SearchBar;