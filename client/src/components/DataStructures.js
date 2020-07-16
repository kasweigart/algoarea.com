import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";

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
            Stack/Queue
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
          <p>A list allowing elements of be added or removed</p>
          <p>This data structure allows random access unlike a linked list.</p>
        </TabPane>
        <TabPane tabId="2">
          <h2 className="mt-4">Linked List</h2>
          <p>A linear group of elements where the order is not defined by their actual location in memory.</p>
          <p>Each node in a linked list a form of data and link or reference to the following node.</p>
          <p>Linked lists are an efficient data structure for inserting and removing data during an iteration.</p>
          <p>Access time of a linked list will always be linear.</p>
        </TabPane>
        <TabPane tabId="3">
          <h2 className="mt-4">Stack/Queue</h2>
        </TabPane>
        <TabPane tabId="4">
          <h2 className="mt-4">Hash Tables</h2>
          <p>A hash table is associative by nature.</p>
          <p>They use a hash function to create a hash code or simply put, an index into a list of spaces the value can be found.</p>
          <p>Use the hashed key to determine the location of its corresponding value.</p>
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
        </TabPane>
        <TabPane tabId="6">
          <h2 className="mt-4">Binary Heaps</h2>
        </TabPane>
        <TabPane tabId="7">
          <h2 className="mt-4">Priority Queue</h2>
        </TabPane>
        <TabPane tabId="8">
          <h2 className="mt-4">Graphs</h2>
        </TabPane>
        <TabPane tabId="9">
          <h2 className="mt-4">Trie</h2>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default DataStructures;
