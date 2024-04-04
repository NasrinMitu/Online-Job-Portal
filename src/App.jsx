import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import JobCard from "./components/JobCard";
import jobData from "./JobDummyData";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import {db} from "./firebase.config.js";

function App() {
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);


  const fetchJobs = async() => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
     // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),  
    })
    });

    // console.log("Tempjobs are = ", tempJobs)

    setJobs(tempJobs);
  }

  console.log("jobs are = ", jobs)


  const fetchJobsCustom = async(jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, where("type", "==", jobCriteria.type), where("title", "==", jobCriteria.title), where("experience", "==", jobCriteria.experience), where("location", "==", jobCriteria.location), orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    console.log("req are from fetchjobs custom", req);
    req.forEach((job) => {
     // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data());
    tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),  
    })
    });

    // console.log("Tempjobs are from fetchjobs custom", tempJobs)

    setJobs(tempJobs);
  }


 


  useEffect(() => {
     fetchJobs()
  }, [])


  return (
    <div>
      <Navbar/>
      <Header/>
      <SearchBar fetchJobsCustom = {fetchJobsCustom}/>
      {/* {jobData.map((job) => (
        <JobCard key = {job.id} {...job}/>
      ))} */}

      {customSearch && 
          <button onClick={fetchJobs} className="flex pl-[1250px] mb-2">
          <p className="bg-blue-500 px-10 py-2 rounded-md text-white">Clear Filters</p>
        </button>
      }

      {jobs.map((job) => (
        <JobCard key = {job.id} {...job}/>
      ))}

    </div>
  )
}

export default App
