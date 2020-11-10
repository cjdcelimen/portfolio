import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import experience from './experience';

export const About = () => {
  const [jobs, setJobs] = useState(experience)
  const [value, setValue] = useState(0)
  const { title, duties, company, dates } = jobs[value]
  return (
    <>
      <section className='about-section'>
        <div className='about-title'>
          <h1>Experience</h1>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {jobs.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}
                >
                  {item.company}
                </button>
              )
            })}
          </div>
          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{duty}</p>
                </div>
              )
            })}
          </article>
        </div>
      </section>
    </>
  );
};
