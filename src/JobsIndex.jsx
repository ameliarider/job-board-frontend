export function JobsIndex({jobs}) {
  return (
    <div> 
      <h1>All Jobs</h1>
      {jobs.map((job) => (
        <div key={job.id}>
          <h2>{job.title}</h2>
          <p>{job.description}</p>
          <img src={job.url} />
          <h2>{job.location}</h2>
          <h2>{job.active}</h2>
          <h2>{job.salary}</h2>
        </div>
      ))}
    </div>
  )
}