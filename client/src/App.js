import React, {Fragment} from 'react';

import './App.css';

//components
import InputJob from "./components/InputJob";
import ListJobs from "./components/ListJobs";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputJob />
        <ListJobs />
      </div>

    </Fragment>
 
  );
}

export default App;
