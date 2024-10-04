import React from 'react'

const Cards = () => {
  
  return (
   <>
   <div className="card" style= {{"width": "18rem"}}>
  <img src="https://picsum.photos/320/500" className="card-img-top" alt="..."/>
  <div className="card-body container text-center py-5">
    <h5 className="card-title">Card title</h5>
    <p className="card-text mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate ultrices condimentum. Aenean nec luctus ex, eu commodo justo.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>

  )
}

export default Cards