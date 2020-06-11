import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const Resources = (props) => {
  return (
    <div>
    <h1 className='mb-3 font-weight-normal'>Resources</h1>
      <ListGroup>
        <ListGroupItem tag="a" href="https://mitpress.mit.edu/books/introduction-algorithms-third-edition" action><p><i>Introduction to Algorithms, Third Edition</i> by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest and Clifford Stein</p></ListGroupItem>
        <ListGroupItem tag="a" href="https://algs4.cs.princeton.edu/home/" action><p><i>Algorithms, Fourth Edition</i> by Robert Sedgewick and Kevin Wayne</p></ListGroupItem>
        <ListGroupItem tag="a" href="http://www.algorist.com/" action><p><i>The Algorithm Design Manual</i> by Steve S. Skiena</p></ListGroupItem>
        <ListGroupItem tag="a" href="http://users.ece.utexas.edu/~adnan/afi-samples.pdf" action><p><i>Algorithms For Interviews</i> by Adnan Aziz and Amit Prakash</p></ListGroupItem>
        <ListGroupItem tag="a" href="https://www.oreilly.com/library/view/algorithms-in-a/9780596516246/" action><p><i>Algorithms in a Nutshell</i> by George T. Heineman, Stanley Selkow, and Gary Pollice</p></ListGroupItem>
        <ListGroupItem tag="a" href="http://www.cs.sjtu.edu.cn/~jiangli/teaching/CS222/files/materials/Algorithm%20Design.pdf" action><p><i>Algorithm Design</i> by Jon Kleinberg and Éva Tardos</p></ListGroupItem>
        <ListGroupItem tag="a" href="https://doc.lagout.org/science/0_Computer%20Science/2_Algorithms/Introduction%20to%20Algorithms_%20A%20Creative%20Approach%20%5BManber%201989-01-11%5D.pdf" action><p><i>Introduction to Algorithms: A Creative Approach</i> by Udi Manber</p></ListGroupItem>
        <ListGroupItem tag="a" href="https://www.cs.cornell.edu/~kozen/Papers/daa.pdf" action><p><i>The Design and Analysis of Algorithms</i> by Anany Levitin</p></ListGroupItem>
        <ListGroupItem tag="a" href="https://doc.lagout.org/Alfred%20V.%20Aho%20-%20Data%20Structures%20and%20Algorithms.pdf" action><p><i>Data Structures and </i>Algorithms by John E. Hopcroft, Alfred V. Aho and Jeffrey D. Ullman</p></ListGroupItem>
        <ListGroupItem tag="a" href="http://index-of.co.uk/Python/Mastering%20Basic%20Algorithms%20in%20the%20Python%20Language%20-%20Hetland%20-%20Apress.pdf" action><p><i>Python Algorithms: Mastering Basic Algorithms in the Python Language</i> by Magnus Lie Hetland</p></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default Resources;