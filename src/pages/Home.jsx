import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <section id='part1'>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 box border text-center px-4 py-2 my-8 rounded" style={{backgroundColor:'rgba(255,255,255,0.3)', marginTop:"130px"}}>
          <h1 className='mt-2' style={{ fontFamily: "Moon Dance", fontSize: "70px"}}>Designed to get <br /> Hired.</h1>
          <h4>Your Skills, Your Story, Your Next <br />job - all in one</h4>
        <Link to={'/steps'} className="btn btn-dark text-light mb-3">MAKE YOUR RESUME</Link>
        </div>
        <div className="col-md-4"></div>
        
      </div>
    </section>

    <section className='p-5'>
      <h1 className='text-center' style={{ fontFamily: "Moon Dance", fontSize: "60px"}}>Tools</h1>
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>Resume</h3>
          <p>Create unlimited new resumes and easily edit them afterwards.</p>
          <h3>Cover Letters</h3>
          <p>Easily write professional cover letters.</p>
          <h3>Jobs</h3>
          <p>Automatically receive new and relevant job postings.</p>
          <h3>Applications</h3>
          <p>Effortlessly manage and track your job applications in an organized manner.</p>

        </div>
        <div className="col-md-6 p-">
          <img src="/src/assets/resume.png" alt="" className='img-fluid' />
        </div>
      </div>
    </section>

    <section id='part2'>

    </section>

    </>
  )
}

export default Home