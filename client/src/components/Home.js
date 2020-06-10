import React from 'react';
import { Jumbotron, Button, Alert } from 'reactstrap';
import {Link } from 'react-router-dom'
import home from '../images/home.png'
import algorithm from '../images/algorithm.gif'
import ds from '../images/ds.png'
import tsc from '../images/tsc.png'
import exercise from '../images/exercise.png'

const Home = (props) => {
  return (
    <div>
      <Jumbotron className='mb-0 text-center bg-white'>
        <h1 className="display-3">Welcome to AlgoArea</h1>
        <p className="lead">A collection of computer science concepts at your disposal to help you start thinking in terms of memory-use and efficiency.</p>
        <hr className="my-2" />
        <img src={home} alt="" className='mt-4 mb-4 img-fluid'/>
        <p>Below you will find what this platform has to offer.</p>
        <p className="lead">
        <a href='#tour'>
          <Button color="info">Take the Tour</Button>
          </a>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0 bg-white' id='tour'>
        <h1 className="display-4">Algorithms</h1>
        <p className="lead font-italic">A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.<br></br>google.com</p>
        <hr className="my-2" />
        <img src={algorithm} alt="" className='img-fluid mt-3 mb-3'/>
        <p>Study how and why the steps of different alogithms output their expected results.</p>
        <p className="lead">
        <Link to='/algorithms'>
          <Button color="info">Go to Algorithms</Button>
          </Link>
        </p>
      </Jumbotron>
      <Jumbotron  className='mb-0 bg-white'>
        <h1 className="display-4">Data Structures</h1>
        <p className="lead font-italic">A data structure is a data organization, management, and storage format that enables efficient access and modification.<br></br>wikipedia.org</p>
        <hr className="my-2" />
        <img src={ds} alt="" className='img-fluid w-50 mt-1 mb-2'/>
        <p>Learn about data structures in a system and explore how they are used to perform a task.</p>
        <p className="lead">
        <Link to='/data-structures'>
          <Button color="info">Go to Data Structures</Button>
          </Link>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0 bg-white'>
        <h1 className="display-4">Time & Space Complexity</h1>
        <p className="lead font-italic">Time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input. Similarly, Space complexity of an algorithm quantifies the amount of space or memory taken by an algorithm to run as a function of the length of the input.<br></br>hackerearth.com</p>
        <hr className="my-2" />
        <img src={tsc} alt="" className='img-fluid w-50 mt-2 mb-2'/>
        <p>Analyze the relation of space and time to understand why certain methods perform better than others.</p>
        <p className="lead">
          <Button color="info">Go to Time & Space Complexity</Button>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0' style={{backgroundColor: '#f7f9fa'}}> 
        <h1 className="display-4">Exercises</h1>
        <p className="lead">Various algorithmic exercises to solidify your working knowledge of algorithms and data structures.</p>
        <hr className="my-2" />
        <img src={exercise} alt="" className='img-fluid mb-2'/>
        <p className="lead">
          <Button color="info">Go to Exercises</Button>
        </p>
      </Jumbotron>
      <Jumbotron className='mb-0' style={{backgroundColor: '#f7f9fa'}}>
        <h1 className="display-4">Resources</h1>
        <p className="lead">A section of helpful resources to guide you through your journey of complex world of computer science.</p>
        <hr className="my-2" />
        <p></p>
        <p className="lead">
          <Button color="info">Go to Resources</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;