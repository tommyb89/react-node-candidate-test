import React, { useState, useEffect } from "react";
import { getJobs } from "./data/api";
import "./App.css";

import { Card } from "../containers";

const App = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      setJobs((await getJobs()) ?? null);
    })();
  }, []);

  console.log(jobs);

  return (
    <div className="app">
      Start building your app here
      {jobs ? jobs.map((job) => <Card {...job} />) : "Loading.."}
    </div>
  );
};

export default App;
