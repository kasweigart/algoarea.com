import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import maxDepthBinaryTree from "../codeImages/maxDepthBinaryTree.png";
import singleNumber from "../codeImages/singleNumber.png";
import singleNumberBitManip from "../codeImages/singleNumberBitManip.png";
import fizzBuzz from "../codeImages/fizzBuzz.png";
import reverseLinkedList from "../codeImages/reverseLinkedList.png";


const Exercises = (props) => {
  return (
    <div>
      <h1 className="mb-3 font-weight-normal">Exercises</h1>
      <p>A list of algorithmic exercises written in Python.</p>
      <i>
        Source: <a href="https://leetcode.com/">LeetCode</a>
      </i>
      <p>This site was ultimately inspired by LeetCode. Please visit their website for more in-depth solutions and discussions.</p>
      <Card className="mt-3 mb-4">
        <CardBody>
          <h4>Maximum Depth of Binary Tree</h4>
          <p>
            Given a binary tree, find its maximum depth. The maximum depth is
            the number of nodes along the longest path from the root node down
            to the farthest leaf node.
          </p>
          <img
            src={maxDepthBinaryTree}
            alt=""
            style={{ maxWidth: "100%" }}
            className="mb-3"
          />
          <p>
            Time Complexity: <b className="text-success">O(n)</b>
          </p>
          <p>
            Space Complexity: <b className="text-success">O(n)</b>
          </p>
        </CardBody>
      </Card>
      <Card className="mb-4">
        <CardBody>
          <h4>Single Number</h4>
          <p>
            Given a non-empty array of integers, every element appears twice
            except for one. Find that single one.
          </p>
          <p>
            <b>List Operation</b>
          </p>
          <img
            src={singleNumber}
            alt=""
            style={{ maxWidth: "100%" }}
            className="mb-3"
          />
          <p>
            Time Complexity:{" "}
            <b className="text-danger">
              O(n<sup>2</sup>)
            </b>
          </p>
          <p>
            Space Complexity: <b className="text-success">O(n)</b>
          </p>
          <p className="mb-5">
            Time complexity is inefficient. Let's find a better solution.
          </p>
          <p>
            <b>Bit Manipulation</b>
          </p>
          <img
            src={singleNumberBitManip}
            alt=""
            style={{ maxWidth: "100%" }}
            className="mb-3"
          />
          <p>
            Time Complexity: <b className="text-success">O(n)</b>
          </p>
          <p>
            Space Complexity: <b className="text-success">O(1)</b>
          </p>
        </CardBody>
      </Card>
      <Card className="mb-4">
        <CardBody>
          <h4>Fizz Buzz</h4>
          <p>
            Write a program that outputs the string representation of numbers
            from 1 to n. But for multiples of three it should output “Fizz”
            instead of the number and for the multiples of five output “Buzz”.
            For numbers which are multiples of both three and five output
            “FizzBuzz”.
          </p>
          <p>
            <b>Newbie Solution</b>
          </p>
          <img
            src={fizzBuzz}
            alt=""
            style={{ maxWidth: "100%" }}
            className="mb-3"
          />
          <p>
            Time Complexity:{" "}
            <b className="text-success">
              O(n)
            </b>
          </p>
          <p>
            Space Complexity: <b className="text-success">O(1)</b>
          </p>
        </CardBody>
      </Card>
      <Card className="mb-4">
        <CardBody>
          <h4>Reverse Linked List</h4>
          <p>
          Reverse a singly linked list.
          </p>
          <p>
            <b>Iterative Solution</b>
          </p>
          <img
            src={reverseLinkedList}
            alt=""
            style={{ maxWidth: "100%" }}
            className="mb-3"
          />
          <p>
            Time Complexity:{" "}
            <b className="text-success">
              O(n)
            </b>
          </p>
          <p>
            Space Complexity: <b className="text-success">O(1)</b>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Exercises;
