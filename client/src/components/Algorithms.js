import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

const Algorithms = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
    <h1 className='mb-3 font-weight-normal'>Algorithms</h1>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Signed Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Unsigned Numbers
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Sort Stabilization
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Merge Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Quick Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            Heap Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
          >
            Binary Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { toggle('8'); }}
          >
            Selections
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '9' })}
            onClick={() => { toggle('9'); }}
          >
            Permutations
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '10' })}
            onClick={() => { toggle('10'); }}
          >
            Subsets
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '11' })}
            onClick={() => { toggle('11'); }}
          >
            Breadth-First Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '12' })}
            onClick={() => { toggle('12'); }}
          >
            Depth-First Search
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '13' })}
            onClick={() => { toggle('13'); }}
          >
            Dijkstra's Algorithm
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '14' })}
            onClick={() => { toggle('14'); }}
          >
            Tree Traversals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '15' })}
            onClick={() => { toggle('15'); }}
          >
            External Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '16' })}
            onClick={() => { toggle('16'); }}
          >
            NP-Complete
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '17' })}
            onClick={() => { toggle('17'); }}
          >
            Topological Sort
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '18' })}
            onClick={() => { toggle('18'); }}
          >
            Cycle Directed
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '19' })}
            onClick={() => { toggle('19'); }}
          >
            Cycle Undirected
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '20' })}
            onClick={() => { toggle('20'); }}
          >
            Graph Connectivity
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '21' })}
            onClick={() => { toggle('21'); }}
          >
            Graph Correlation
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
            <h2 className='mt-4'>Signed Numbers</h2>
        </TabPane>
        <TabPane tabId="2">
            <h2 className='mt-4'>Unsigned Numbers</h2>
        </TabPane>
        <TabPane tabId="3">
            <h2 className='mt-4'>Sort Stabilization</h2>
        </TabPane>
        <TabPane tabId="4">
            <h2 className='mt-4'>Merge Sort</h2>
        </TabPane>
        <TabPane tabId="5">
            <h2 className='mt-4'>Quick Sort</h2>
        </TabPane>
        <TabPane tabId="6">
            <h2 className='mt-4'>Heap Sort</h2>
        </TabPane>
        <TabPane tabId="7">
            <h2 className='mt-4'>Binary Search</h2>
        </TabPane>
        <TabPane tabId="8">
            <h2 className='mt-4'>Selections</h2>
        </TabPane>
        <TabPane tabId="9">
            <h2 className='mt-4'>Permutations</h2>
        </TabPane>
        <TabPane tabId="10">
            <h2 className='mt-4'>Subsets</h2>
        </TabPane>
        <TabPane tabId="11">
            <h2 className='mt-4'>Breadth-First Search</h2>
        </TabPane>
        <TabPane tabId="12">
            <h2 className='mt-4'>Depth-First Search</h2>
        </TabPane>
        <TabPane tabId="13">
            <h2 className='mt-4'>Dijkstra's Algorithm</h2>
        </TabPane>
        <TabPane tabId="14">
            <h2 className='mt-4'>Tree Traversals</h2>
        </TabPane>
        <TabPane tabId="15">
            <h2 className='mt-4'>External Sort</h2>
        </TabPane>
        <TabPane tabId="16">
            <h2 className='mt-4'>NP-Complete</h2>
        </TabPane>
        <TabPane tabId="17">
            <h2 className='mt-4'>Topological Sort</h2>
        </TabPane>
        <TabPane tabId="18">
            <h2 className='mt-4'>Cycle Directed</h2>
        </TabPane>
        <TabPane tabId="19">
            <h2 className='mt-4'>Cycle Undirected</h2>
        </TabPane>
        <TabPane tabId="20">
            <h2 className='mt-4'>Graph Connectivity</h2>
        </TabPane>
        <TabPane tabId="21">
            <h2 className='mt-4'>Graph Correlation</h2>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Algorithms;