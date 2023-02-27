import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
// import './sidebar.scss'
import home from '../../images/sidebar-svg/home.svg'
import employee from '../../images/sidebar-svg/employee.svg'
import assets from '../../images/sidebar-svg/assets.svg'
import leave from '../../images/sidebar-svg/leave.svg'
import grant_leave from '../../images/sidebar-svg/holiday.svg'
import holiday from '../../images/sidebar-svg/holiday-1.svg'
import salary_slip from '../../images/sidebar-svg/salary slip.svg'
import drive from '../../images/sidebar-svg/drive.svg'
import document from '../../images/sidebar-svg/document.svg'
import policy from '../../images/sidebar-svg/policy.svg'
import training from '../../images/sidebar-svg/training.svg'
import activity from '../../images/sidebar-svg/activity.svg'
import immenceIcon from '../../images/sidebar-svg/Subtract.svg'
import immenceName from '../../images/sidebar-svg/immence.svg'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleTrigger = () => setIsOpen(!isOpen)
  return (
    <div className="sidebar-div">
      <div className="page">
        {/* <div className="content">
          <h1>Immence</h1>
        </div> */}

        <div
          className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--close'}`}
        >
          <div className="trigger" onClick={handleTrigger}>
            {isOpen ? (
              <>
                <img src={immenceName} alt="immence-name" />
                <FontAwesomeIcon icon={faCaretLeft} />
              </>
            ) : (
              <>
                <img
                  src={immenceIcon}
                  className="immence-icon img-fluid"
                  alt="immence-icon"
                />
                {/* <FontAwesomeIcon icon={faCaretRight} /> */}
              </>
            )}
          </div>

          <div className="sidebar-position">
            <img src={home} alt="home-svg" />
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <span>Home</span>
          </div>
          <div className="sidebar-position">
            <img src={employee} alt="emp-svg" />
            {/* <FontAwesomeIcon icon={faCogs} /> */}
            <span>Employee</span>
          </div>
          <div className="sidebar-position">
            <img src={assets} alt="asset-svg" />
            {/* <FontAwesomeIcon icon={faCogs} /> */}
            <span>Assets</span>
          </div>
          <div className="sidebar-position">
            <img src={leave} alt="leave-svg" />
            {/* <FontAwesomeIcon icon={faTable} /> */}
            <span>Leave</span>
          </div>

          <div className="sidebar-position">
            <img src={grant_leave} alt="grant-svg" />
            <span>Grant Leave</span>
          </div>

          <div className="sidebar-position">
            <img src={holiday} alt="grant-svg" />
            <span>Holidays</span>
          </div>

          <div className="sidebar-position">
            <img src={salary_slip} alt="grant-svg" />
            <span>Salary Slip</span>
          </div>

          <div className="sidebar-position">
            <img src={drive} alt="drive-svg" />
            <span>Drive</span>
          </div>

          <div className="sidebar-position">
            <img src={document} alt="document-svg" />
            <span>Document</span>
          </div>

          <div className="sidebar-position">
            <img src={policy} alt="policy-svg" />
            <span>Policy</span>
          </div>

          <div className="sidebar-position">
            <img src={training} alt="training-svg" />
            <span>Training</span>
          </div>

          <div className="sidebar-position">
            <img src={activity} alt="activity-svg" />
            <span>Activity</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
