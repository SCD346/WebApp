import React, {Fragment, useEffect, useState} from "react";

import EditJob from "./EditJob";

const ListJobs = () => {
    const [jobs, setJobs] = useState([]);

    //DELETE JOB FUNCTION

    const deleteJob = async id => {
        try {
            const deleteJob = await fetch(`http://localhost:8080/jobs/${id}`, {
            method: "DELETE"
        });

        setJobs(jobs.filter(job => job.id !== id));
          console.log(deleteJob);
        } catch (error) {
          console.error(error.message)
        }
    };




    //GET JOBS FUNCTION

    const getJobs = async () => {
        try {
            const response = await fetch("http://localhost:8080/jobs");
            const jsonData = await response.json();
            
            //console.log(jsonData)
            setJobs(jsonData)
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getJobs();
    }, [])

    //console.log(jobs);
    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Company</th>
                    <th>ID</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
                {jobs.map(job => (
                    <tr key={job.id}>
                        <td>{job.title}</td>
                        <td>{job.description}</td>
                        <td>{job.company}</td>
                        <td>{job.id}</td>

                        <td>
                            <EditJob job ={job}/>
                        </td>

                        <td>
                            <button 
                                className= "btn btn-danger"
                                onClick={() => deleteJob(job.id)}
                                >
                                    Delete
                            </button></td>
                    </tr> 

                ))}
                
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListJobs;