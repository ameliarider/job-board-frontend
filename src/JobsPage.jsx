import { Header } from './Header'
import { JobsIndex } from './JobsIndex'
import { JobsShow } from './JobsShow'
import { JobsNew } from './JobsNew'
import { LoginPage } from './LoginPage'
import { SignupPage } from './SignupPage'
import { LogoutLink } from './LogoutLink'
import { useState, useEffect } from "react";
import axios from "axios";




export function JobsPage() {
  const [jobs, setJobs] = useState([]);

  const handleIndex = () => {
    axios.get("localhost:3000/jobs.json").then((response) => {
      console.log(response.data);
      setJobs(response.data);
    });
  }

  useEffect(handleIndex, []);

  return (
    <main>
      <JobsIndex jobs={jobs}/>
    </main>
  );
}