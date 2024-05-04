import React from 'react'
import "./Projects.css"
import { projects } from '../data'

const Projects = () => {
  return (
    <div className="container">
      <div className='top-div'></div>

      <div className="row text-center">
        <div className="col-lg-3 col-md-3 col-sm-12 mt-5 mb-5">
          <img src="/images/person-1.png" alt="" className='mb-3' style={{ width: "80px" }} />
          <h3>NFT</h3>
          <p>nft@</p>
          <p>1M+ followers</p>

          <button className='btn btn-primary project-buttons mt-3 mb-3'>Ongoing</button> <br />
          <button className='btn btn-primary project-buttons mt-3 mb-3'>Testemonials</button> <br />
          <button className='btn btn-primary project-buttons mt-3 mb-3'>Previous Projects</button> <br />
          <button className='btn btn-primary project-buttons mt-3 mb-3'>Case Studies</button> <br />
        </div>

        <div className='col-lg-9 col-md-9 col-sm-12 text-center'>
          <div className="row">
            {

              projects.map((project) => (
                <>
                  <div className="col-lg-3 col-md-3 col-sm-12 mt-4">

                    <img src={project.img} alt="" style={{ width: "200px" }} />
                    <h3>{project.name}</h3>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects