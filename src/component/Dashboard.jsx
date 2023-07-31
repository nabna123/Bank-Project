import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import dataArray from './Data';
import { Link } from 'react-router-dom';
import {AiFillCloseCircle} from 'react-icons/ai'
import {BsFlag} from 'react-icons/bs'

function Dashboard() {
  const [data, setData] = useState(dataArray);
  const [showInProgress, setShowInProgress] = useState(true); // Set inProgress as initially active
  const [showCompleted, setShowCompleted] = useState(false);

  const toggleInProgress = () => {
    setShowInProgress(true);
    setShowCompleted(false);
  };

  const toggleCompleted = () => {
    setShowCompleted(true);
    setShowInProgress(false);
  };

  useEffect(()=>{
    localStorage.clear()
  },[])


  const filteredData = data.filter(item => {
    if (showInProgress) {
      return item.status !== 'completed';
    } else if (showCompleted) {
      return item.status === 'completed';
    }
    return true;
  });

  return (
    <div className='main'>
      <div className='dashmain'>
        <div className='head_dashboard'>
          <div className='h2'>
            <h2 className='daash'>DASHBOARD</h2>
          </div>
          <div className='create-button'>
            <Link to='/Requestform' id='create'>
              <button>Create</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='table1'>
        <div className="table_container">
          <div className="btn-com-in">
            <div className='btn'>
              <div className='butt'>
               
                 <button
                  className={`im ${showInProgress ? 'active' : 'inactive'}`}
                  onClick={toggleInProgress}
                >
                  <AiFillCloseCircle className='inlogo' /> Inprogress
                </button>
                <button
                  className={`co ${showCompleted ? 'active' : 'inactive'}`}
                  onClick={toggleCompleted}
                >
                  <BsFlag className='cologo' /> Completed
                </button>
              </div>
            </div>
            <hr className='line' />
            <div className='se'>
              <div className="search_bar">
                <label id='search' htmlFor="">Search</label>
                <input type="search" />
              </div>
            </div>
          </div>
          <div className='tab'>
            {filteredData.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Requested On</th>
                    <th>Customer Name</th>
                    <th>Branch code</th>
                    <th>Branch Name</th>
                    <th>Customer Account Number</th>
                    <th>Compensation</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.requestedOn}</td>
                      <td>{item.customername}</td>
                      <td>{item.branchcode}</td>
                      <td>{item.branchname}</td>
                      <td>{item.customeraccountnumber}</td>
                      <td>{item.compensation}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-data-found">No data found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
