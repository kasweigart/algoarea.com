import React from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Terminology = (props) => {
  return (
    <div>
      <h1 className="mb-3 font-weight-normal">Terminology</h1>
      <ListGroup>
        <ListGroupItem><b>Leaf:</b> A node with no children</ListGroupItem>
        <ListGroupItem><b>Iterate:</b> Defined number of repitions through a statement or group of statements</ListGroupItem>
        <ListGroupItem><b>XOR:</b> This is a logical operator where the output is true only when one input is true and not both</ListGroupItem>

      </ListGroup>
    </div>
  );
};

export default Terminology;
