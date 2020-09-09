import React, { Fragment, useState } from "react";

const InputJob = () => {
    const [title, setTitle] = useState("Enter a job title!");
    const [description, setDescription] = useState("Enter a description!");
    const [company, setCompany] = useState("Enter a company!");
    const [id, setid] = useState("id");

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          //const body = { description };
          const body = {title, description, company, id};
          const response = await fetch("http://localhost:8080/jobs", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body)
          });

          //console.log(response)
          window.location = "/";
        } catch (err) {
            console.error(err.message)
        }
    };

    return (
        <Fragment>
            {/* <h1 className="text-center mt-5">JobBored.com</h1> */}
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                /> 

                <input 
                    type="text" 
                    className="form-control" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />

                <input 
                    type="text" 
                    className="form-control" 
                    value={company} 
                    onChange={e => setCompany(e.target.value)}
                />

                <input 
                    type="text" 
                    className="form-control" 
                    value={id} 
                    onChange={e => setid(e.target.value)}
                />

                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputJob;