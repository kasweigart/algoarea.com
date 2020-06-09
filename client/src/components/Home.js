import React from 'react';
import { Jumbotron, Button, Alert } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
    <Alert color="warning">
        This site is currently under construction.
      </Alert>
      <Jumbotron>
        <h1 className="display-3">Welcome to AlgoArea</h1>
        <p className="lead">A collection of computer science concepts at your disposal to help you start thinking in terms of logistics and efficiency.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Home;