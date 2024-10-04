import React from 'react'

const Hero = () => {
  return (
    <div className="jumbotron mb-3"
      style={{ height: "300px", backgroundColor: "rgba(255, 247, 247)" }} >
      <h1 className="display-4">A Warm Welcome!</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>

    </div>
  )
};

export default Hero