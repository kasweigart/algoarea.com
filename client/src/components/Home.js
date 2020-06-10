import React from 'react';
import { Jumbotron, Button, Alert } from 'reactstrap';
import {Link } from 'react-router-dom'
import home from '../images/home.png'

const Home = (props) => {
  return (
    <div>
      <Jumbotron className='mb-0 text-center bg-white'>
        <h1 className="display-3">Welcome to AlgoArea</h1>
        <p className="lead">A collection of computer science concepts at your disposal to help you start thinking in terms of memory and efficiency.</p>
        <hr className="my-2" />
        <img src={home} alt="" className='mt-4 mb-4 img-fluid'/>
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
          <Button color="info">Take the Tour</Button>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0'>
        <h1 className="display-4">Algorithms</h1>
        <p className="lead font-italic">A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.</p>
        <hr className="my-2" />
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
        <Link to='/algorithms'>
          <Button color="info">Learn More</Button>
          </Link>
        </p>
      </Jumbotron>
      <Jumbotron  className='mb-0 text-right bg-white'>
        <h1 className="display-4">Data Structures</h1>
        <p className="lead font-italic">A data structure is a data organization, management, and storage format that enables efficient access and modification.</p>
        <hr className="my-2" />
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
        <Link to='/data-structures'>
          <Button color="info">Learn More</Button>
          </Link>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0'>
        <h1 className="display-4">Time & Space Complexity</h1>
        <p className="lead font-italic">Time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input. Similarly, Space complexity of an algorithm quantifies the amount of space or memory taken by an algorithm to run as a function of the length of the input.</p>
        <hr className="my-2" />
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
          <Button color="info">Learn More</Button>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0 bg-white text-right'> 
        <h1 className="display-4">Exercises</h1>
        <p className="lead">Complete various algorithmic exercises and solidify your working knowledge of these important subjects.</p>
        <hr className="my-2" />
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
          <Button color="info">Learn More</Button>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0'>
        <h1 className="display-4">Resources</h1>
        <p className="lead font-italic">A section of helpful resources to guide you through your journey of complex world of computer science.</p>
        <hr className="my-2" />
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
          <Button color="info">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;