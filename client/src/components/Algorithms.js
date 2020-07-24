import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";
import mergeSort from "../images/mergeSort.svg";
import signUnsignNum from "../images/signUnsignNum.png";
import sortStability from "../images/sortStability.svg";
import quickSort from "../images/quickSort.png";
import heapSort from "../images/heapSort.gif";
import binarySearch from "../images/binarySearch.svg";
import dfs from "../images/dfs.gif";
import bfs from "../images/bfs.svg";
import dijAlg from "../images/dijAlg.svg";
import preorderTrav from "../images/preorderTrav.gif";
import npComplete from "../images/npComplete.svg";
import topolOrder from "../images/topolOrder.svg";
import directCycle from "../images/directCycle.png";
import undirectCycle from "../images/undirectCycle.png";
import graphConnect from "../images/graphConnect.svg";
import permutation from "../images/permutation.png";
import selections from "../images/selections.png";

const Algorithms = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <h1 className="mb-3 font-weight-normal">Algorithms</h1>
      <Link to="/sorting-visualizer" style={{ textDecoration: "none" }}>
        <h4>Sorting Visualizer</h4>
      </Link>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Signed Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Unsigned Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Sort Stability
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "4" })}
            onClick={() => {
              toggle("4");
            }}
          >
            Merge Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "5" })}
            onClick={() => {
              toggle("5");
            }}
          >
            Quick Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "6" })}
            onClick={() => {
              toggle("6");
            }}
          >
            Heap Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "7" })}
            onClick={() => {
              toggle("7");
            }}
          >
            Binary Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "8" })}
            onClick={() => {
              toggle("8");
            }}
          >
            Selections
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "9" })}
            onClick={() => {
              toggle("9");
            }}
          >
            Permutations
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "11" })}
            onClick={() => {
              toggle("11");
            }}
          >
            Breadth-First Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "12" })}
            onClick={() => {
              toggle("12");
            }}
          >
            Depth-First Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "13" })}
            onClick={() => {
              toggle("13");
            }}
          >
            Dijkstra's Algorithm
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "14" })}
            onClick={() => {
              toggle("14");
            }}
          >
            Tree Traversals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "15" })}
            onClick={() => {
              toggle("15");
            }}
          >
            External Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "16" })}
            onClick={() => {
              toggle("16");
            }}
          >
            NP-Complete
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "17" })}
            onClick={() => {
              toggle("17");
            }}
          >
            Topological Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "18" })}
            onClick={() => {
              toggle("18");
            }}
          >
            Directed Cycle
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "19" })}
            onClick={() => {
              toggle("19");
            }}
          >
            Undirected Cycle
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "20" })}
            onClick={() => {
              toggle("20");
            }}
          >
            Graph Connectivity
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <h2 className="mt-4">Signed Number</h2>
          <p>
            These are required to encode negative numbers in binary number
            systems.
          </p>
          <p>
            The four widely-used representations of signed numbers are the
            following:
          </p>
          <h4>Sign-and-Magnitude</h4>
          <p>The sign of a number is represented with a sign bit.</p>
          <p>
            The sign bit is 0 when the number is positive, and 1 when a number
            is negative.
          </p>
          <h4>Ones' Compliment</h4>
          <p>
            This is represented as the compliment of its positive counterpart.
          </p>
          <h4>Twos' Compliment</h4>
          <p>
            This is represented as one greater than the ones' compliment of the
            positive integer.
          </p>
          <h4>Biased Representation</h4>
          <p>This is represented with a biasing value.</p>
          <p>
            A value <i>K</i> is added to the unsigned number to act its signed
            representation.
          </p>
          <img src={signUnsignNum} alt="" className="img-fluid mt-4" />
        </TabPane>
        <TabPane tabId="2">
          <h2 className="mt-4">Unsigned Numbers</h2>
          <p>
            Unsigned numbers can only store positive numbers. They cannot store
            negative numbers.
          </p>
          <p>
            These numbers do not have a sign (hence the name unsigned numbers).
          </p>
          <p>An unsigned number carries the magnitude of the value.</p>
          <p>
            For example, the unsigned binary representation of the integer 61
            is: <code>00111101</code>
          </p>
          <img src={signUnsignNum} alt="" className="img-fluid mt-4" />
        </TabPane>
        <TabPane tabId="3">
          <h2 className="mt-4">Sort Stability</h2>
          <p>
            A sorting algorithm is said to be stable when elements of the same
            key and order are present in its output as they are in its input.
          </p>
          <img src={sortStability} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="4">
          <h2 className="mt-4">Merge Sort</h2>
          <p>This is classified as a divide and conquer algorithm.</p>
          <p>
            Merge Sort divides the full input into two halves. It then calls
            itself for each of the halves and merges the sorted output for each
            half.
          </p>
          <p>
            Here is some pseudocode to guide your understanding of this sorting
            algorithm.
          </p>
          <code>
            mergeSort(arr, l, r)
            <br />
            If r &gt; l<br />
            1. Locate the center of the array and then divide the array into two
            halves: <br />
            c = (l + r) / 2
            <br />
            2. Call mergeSort for the first half of the array: <br />
            Call mergeSort(arr, l, c)
            <br />
            3. Call mergeSort for second half of the array:
            <br />
            Call mergeSort(arr, c + 1, r)
            <br />
            4. Merge the two sorted halves together from step 2 and 3:
            <br />
            Call merge(arr, l, c, r)
            <br />
          </code>
          <p>Merge sort has a time complexity of O(nlogn).</p>
          <img src={mergeSort} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="5">
          <h2 className="mt-4">Quick Sort</h2>
          <p>This is classified as a conquer and divide algorithm.</p>
          <p>
            Quick sort uses an element as a pivot and partitions surrounding
            elements into two sub-arrays. The sub-arrays are dependent on
            whether they are greater or less than the chosen pivot point.
          </p>
          <p>Recursion is used to further sort the sub-arrays.</p>
          <p>The typical time complexity of quick sort is O(nlogn)</p>
          <img
            src={quickSort}
            alt=""
            className="img-fluid"
            style={{ width: "50%" }}
          />
        </TabPane>
        <TabPane tabId="6">
          <h2 className="mt-4">Heap Sort</h2>
          <p>
            Heap sort is split into two sections, an unsorted section and a
            sorted section.
          </p>
          <p>
            The unsorted section of a heap sort is kept in a heap data structure
            to find its greatest element through each iteration.
          </p>
          <p>Heap sort is not a stable sorting algorithm.</p>
          <img src={heapSort} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="7">
          <h2 className="mt-4">Binary Search</h2>
          <p>
            Binary search is used to locate an element from a sorted list of
            elements.
          </p>
          <p>
            The section where is the element is located is continously divided
            in half until it is left with one element.
          </p>
          <img src={binarySearch} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="8">
          <h2 className="mt-4">Selections</h2>
          <p>
            Selections are used to make decisions. It is one of the three logic
            structures in programming.
          </p>

          <p>
            They allow a program to decide whether to answer one way or the
            other. After its decision, the program may proceed to its next
            event.
          </p>
          <p>
            An easy way to think about a selection is to describe it as an
            if-then-else statement:
          </p>
          <p>
            <i>If</i> the condition is true, <i>then</i> do the following,{" "}
            <i>otherwise</i> do this instead.
          </p>
          <img src={selections} alt="" />
        </TabPane>
        <TabPane tabId="9">
          <h2 className="mt-4">Permutations</h2>
          <p>
            A permutation is a way in which a set of elements can be arranged.
          </p>
          <img src={permutation} alt="" />
        </TabPane>
        <TabPane tabId="11">
          <h2 className="mt-4">Breadth-First Search</h2>
          <p>
            This algorithm begins by selecting a starting node, and then
            traversing the graph through each height level or layer.
          </p>
          <p>
            The search moves horizontally through each layer. After a layer is
            complete, it moves onto the next layer until the entire search is
            complete.
          </p>
          <img src={bfs} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="12">
          <h2 className="mt-4">Depth-First Search</h2>
          <p>This algorithm is a kind of search in the form of a traversal.</p>
          <p>
            By itself, DFS is not very useful. When it is utilized in another
            algorithm, it becomes more powerful.
          </p>
          <p>It is used to traverse the edges and nodes of a graph.</p>
          <p>
            DFS will take its path considering the graph's depth first. Once it
            has reached the bottom, it will backtrack and continue its
            traversal.
          </p>
          <p>
            The algorithm marks nodes that have been traversed so they are not
            revisited later.
          </p>
          <img src={dfs} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="13">
          <h2 className="mt-4">Dijkstra's Algorithm</h2>
          <p>
            This algorithm is used to find the shortest path among nodes in a
            graph data structure.
          </p>
          <p></p>
          <p>Here is some pseudocode to help understand the process:</p>
          <code>
            Let distance value of starting vertex to the distance to itself = 0
            <br />
            Let distance of other vertices from the start = ∞<br />
            While each vertex is unvisited ---Go to the unvisited vertex with
            the smallest known distance from the starting vertex
            <br />
            ---For each unvisited neighbor of the current vertex:
            <br />
            ------Find the distance from the starting vertex
            <br />
            ------If the distance of the current vertex is less than the known
            distance:
            <br />
            ---------Update the shortest distance to this vertex
            <br />
            ---------Update the previous vertex with the current vertex
            <br />
            ---Go to next unvisited neighbor
            <br />
            ---Update list of visited vertices
            <br />
          </code>
          <img src={dijAlg} alt="" className="img-fluid mt-4" />
        </TabPane>
        <TabPane tabId="14">
          <h2 className="mt-4">Tree Traversals</h2>
          <p>Trees can be traversed in several ways unlike queues, stacks, arrays, and linked lists.</p>
          <img src={preorderTrav} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="15">
          <h2 className="mt-4">External Sort</h2>
        </TabPane>
        <TabPane tabId="16">
          <h2 className="mt-4">NP-Complete</h2>
          <img src={npComplete} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="17">
          <h2 className="mt-4">Topological Sort</h2>
          <img src={topolOrder} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="18">
          <h2 className="mt-4">Directed Cycle</h2>
          <img src={directCycle} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="19">
          <h2 className="mt-4">Undirected Cycle</h2>
          <img src={undirectCycle} alt="" className="img-fluid" />
        </TabPane>
        <TabPane tabId="20">
          <h2 className="mt-4">Graph Connectivity</h2>
          <img src={graphConnect} alt="" className="img-fluid" />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Algorithms;
