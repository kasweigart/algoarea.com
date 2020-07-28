import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import arr from "../images/arr.svg";
import linkedList from "../images/linkedList.jpg";
import stack from "../images/stack.svg";
import hashTable from "../images/hashTable.svg";
import ds from "../images/ds.png";
import binaryHeap from "../images/binaryHeap.svg";
import graph from "../images/graph.svg";
import trie from "../images/trie.svg";
import priorityQueue from "../images/priorityQueue.jpg";

const DataStructures = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="mb-3 font-weight-normal">Data Structures</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Dynamic Array
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Linked List
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Stack & Queue
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            Hash Tables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Binary Tree
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            Binary Heaps
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            Priority Queue
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "8" })}
            onClick={() => {
              toggle("8");
            }}
          >
            Graphs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "9" })}
            onClick={() => {
              toggle("9");
            }}
          >
            Trie
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <h2 className="mt-4">Dynamic Array</h2>
          <p>
            A list allowing elements to be added or removed in constant time.
          </p>
          <p>This data structure allows random access unlike a linked list.</p>
          <img src={arr} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="2">
          <h2 className="mt-4">Linked List</h2>
          <p>
            A linear group of elements where the order is not defined by their
            actual location in memory.
          </p>
          <p>
            Each node in a linked list a form of data and link or reference to
            the following node.
          </p>
          <p>
            Linked lists are an efficient data structure for inserting and
            removing data during an iteration.
          </p>
          <p>Access time of a linked list will always be linear.</p>
          <img
            src={linkedList}
            alt=""
            style={{ width: "75%" }}
            className="img-fluid"
          />
        </TabPane>
        <TabPane tabId="3">
          <h2 className="mt-4">Stack & Queue</h2>
          <h4>Stack</h4>
          <p>
            A stack is defined as a container of objects that can be added or
            removed based on a principle known as LIFO (Last-in, First-Out).
          </p>
          <p>
            Stacks are only allowed two operations of manipulating a stack. Push
            or add an element into the stack. Pop or remove the element out of
            the stack.
          </p>
          <p>
            Stacks are recursive data structures which are made up of a top
            followed by the rest of the stack, or simply an empty stack.
          </p>
          <h4>Queue</h4>
          <p>
            A queue is defined as a container of objects that can be added or
            removed based on a principle known as FIFO (First-In, First-Out)
          </p>
          <p>
            Queues are also only allowed two operation of manipulating a queue.
            Enqueue or add an element into the back of the queue. Dequeue or
            take away an element from the front of the queue.
          </p>
          <img src={stack} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="4">
          <h2 className="mt-4">Hash Tables</h2>
          <p>A hash table is associative by nature.</p>
          <p>
            They use a hash function to create a hash code or simply put, an
            index into a list of spaces the value can be found.
          </p>
          <p>
            Use the hashed key to determine the location of its corresponding
            value.
          </p>
          <img src={hashTable} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="5">
          <h2 className="mt-4">Binary Tree</h2>
          <p>
            A tree represents each node having a maximum of two children. These
            are referred to the left child and right child.
          </p>
          <p>One node is declared the root node.</p>
          <p>
            Every other node that is not the root node is connected to one
            parent node.
          </p>
          <p>Each node may have an arbitrary number of child nodes.</p>
          <img src={ds} alt="" style={{ width: "50%" }} className="img-fluid" />
        </TabPane>
        <TabPane tabId="6">
          <h2 className="mt-4">Binary Heaps</h2>
          <p>Binary heaps are just binary trees with some key differences.</p>
          <p>
            One is that they are completed binary trees. Each level of nodes are
            full although the last level may not be. This level is level is kept
            to the left of the tree whenever possible. Having this property for
            a binary tree allows them to fit well in an array.
          </p>
          <p>Binary heaps can be either a Min Heap or a Max Heap.</p>
          <h4>Min Heap</h4>
          <p>
            The root of a Min Heap has to be the minimum node value of all nodes
            present in the tree.
          </p>
          <p>Node values may be equivalent to their parent, but no less.</p>
          <h4>Max Heap</h4>
          <p>
            The root of a Max Heap has to be the maximum node value of all nodes
            present in the tree.
          </p>
          <p>Node values may be equivalent to their parent, but no more.</p>
          <img
            src={binaryHeap}
            alt=""
            style={{ width: "75%" }}
            className="img-fluid"
          />
        </TabPane>
        <TabPane tabId="7">
          <h2 className="mt-4">Priority Queue</h2>
          <p>A Priority Queue is a queue with the following features:</p>
          <p>Each element of the queue has a priority.</p>
          <p>
            High priority elements are taken off the queue before elements with
            lower priority.
          </p>
          <p>
            Two elements that have the same priority are used by their order and
            position in the queue.
          </p>
          <img
            src={priorityQueue}
            alt=""
            style={{ width: "75%" }}
            className="img-fluid"
          />
        </TabPane>
        <TabPane tabId="8">
          <h2 className="mt-4">Graphs</h2>
          <p>
            A graph data structure is a visual representation of a group of
            objects. This graph may have pairs of objects that are linked
            together.
          </p>
          <p>
            The points where the objects are connected are called verticies.
          </p>
          <p>The links that connect the verticies are called edges.</p>
          <img src={graph} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="9">
          <h2 className="mt-4">Trie</h2>
          <p>
            Tries is a kind of search tree used as an efficient method to
            retrieve data.
          </p>
          <p>Keys in a trie are usually strings.</p>
          <p>
            Nodes of a trie do not store an associated key rather the position
            in the tree tells which key the node is associated with.
          </p>
          <p>
            Node descendants store a common prefix of the string with the root
            node being an empty string.
          </p>
          <p>
            Keys usually span out into leaves opening up more variations of the
            string.
          </p>
          <img src={trie} alt="" className="img-fluid" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DataStructures;
