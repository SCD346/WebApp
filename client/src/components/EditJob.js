import React, {Fragment, useState} from "react";

const EditJob = ({ job }) => {
    //const [title, setDescription] = useState(job.title)
    const [description, setDescription] = useState(job.description)
    //console.log(job)
    

    //EDIT DESCRIPTION FUNCTION

    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch (
                `http://localhost:8080/jobs/${job.id}`,
            {
            method: "PUT",
            headers: {"content-type": "application/json" },
            body: JSON.stringify(body)
        }
    );

    window.location = "/";
    } catch (err) {
        console.error(err.message);
     }
    };




    return (
        <Fragment>
            <button 
            type="button" 
            className="btn btn-light" 
            data-toggle="modal" 
            data-target={`#id${job.id}`}>
                Edit
            </button>


{/* EDIT MODAL START */}
            <div 
                className="modal" 
                id={`id${job.id}`}
                onClick={() => setDescription(job.description)}
            >

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Job</h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            onClick={() => setDescription(job.description)}
                    >
                        &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        <input 
                            type="text" 
                            className="form-control"
                            value= {description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-light" 
                            data-dismiss="modal"
                            onClick={e => updateDescription(e)}
                            >
                            Save
                        </button>

                        <button
                            type="button" 
                            className="btn btn-danger" 
                            data-dismiss="modal"
                            onClick={() => setDescription(job.description)}
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default EditJob;