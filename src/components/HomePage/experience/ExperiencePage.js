import React from 'react'
import '/Users/shajinshan/Desktop/react/portfolio/src/components/HomePage/experience/experience.css'
function ExperiencePage() {
  return (
    <div>
        <div className='experience-container'>
        <div id="carouselExampleAutoplaying " className="carousel slide immg"  data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HsoA5RuUsXL2Wj1TeFWTGZ-wcXSyhBellQ&s" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTSiKhXmmWRVCghwdp0z62xf-saR9JvpguJw&s" className="d-block w-100" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    </div>
  )
}

export default ExperiencePage