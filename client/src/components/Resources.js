import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Resources = (props) => {
  return (
    <div>
    <h1 className='mb-3 font-weight-normal'>Resources</h1>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Resources;