import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
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
import vectorRight from '../../images/sidebar-svg/Vector-right.svg'
import vectorLeft from '../../images/sidebar-svg/Vector-left.svg'
import chat from '../../images/sidebar-svg/chat.svg'
import help from '../../images/sidebar-svg/help.svg'
import PersonVector from '../../images/sidebar-svg/person-vector.svg'
import polygon from '../../images/sidebar-svg/Polygon.svg'
import republic from '../../images/sidebar-svg/republic-svg.svg'
import poojaImg from '../../images/sidebar-svg/pooja.svg'
import colorHoli from '../../images/home-img/color-holi.png'
import { Card, Form } from 'react-bootstrap'

// // import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

const Sidebar = () => {
  const CardsData = [
    {
      id: 1,
      name: 'Masala Theoryy',
    },
    {
      id: 2,
      name: 'Jugaadi Adda',
    },
    {
      id: 3,
      name: 'Milano Pizzeria',
    },
  ]
  console.log(CardsData)
  const [isOpen, setIsOpen] = useState(false)
  const handleTrigger = () => setIsOpen(!isOpen)

  return (
    <div className="sidebar-div">
      <div className="page">
        <div className={`content ${isOpen ? 'content-left' : 'content'}`}>
          <div className="main-content d-flex justify-content-between m-1 align-items-center">
            <div className="first-content">
              <h5>Welcome, Amit</h5>
              <small>Monday, 30 January 2023</small>
            </div>
            <div className="second-content">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search here"
                  className="me-2"
                  aria-label="Search"
                />
                <img src={PersonVector} alt="person-vector" />
                <img src={polygon} alt="polygon" className="m-1" />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </div>
          </div>
          <div className="upcoming-events mt-3 ps-3">
            <p>UPCOMING EVENTS</p>
            <div className="sub-upcoming-events">
              <div className="d-flex ">
                {CardsData.map((element, id) => {
                  return (
                    <>
                      <Card
                        style={{ width: '13rem', border: 'none' }}
                        className="mx-2 mt-3"
                      >
                        <Card.Img
                          // variant="top"
                          src={poojaImg}
                          style={{
                            // height: '10rem',
                            borderRadius: '50%',
                            width: '20px',
                          }}
                          className="mt-1 img-fluid"
                        />
                        <Card.Img
                          variant="top"
                          src={republic}
                          style={{ height: '5rem', borderRadius: '50%' }}
                          // className="mt-3"
                        />
                        <Card.Body>
                          <p>{element.name}</p>
                          <small>on Monday, 30 January</small>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="upcoming-holidays mt-3 ps-3">
            <p>UPCOMING HOLIDAYS</p>
            <div className="d-flex">
              {CardsData.map((element, id) => {
                return (
                  <>
                    <Card
                      style={{ width: '9rem', border: 'none' }}
                      className="mx-2 mt-3 holiday-cards position-relative"
                    >
                      <Card.Img
                        variant="top"
                        src={colorHoli}
                        // style={{ height: '5rem', borderRadius: '50%' }}
                        // className="mt-3"
                      />
                      <Card.Body className="card-body position-absolute">
                        <p>{element.name}</p>
                        <small>on Monday, 30 January</small>
                      </Card.Body>
                    </Card>
                  </>
                )
              })}
            </div>
          </div>
        </div>

        <div
          className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--close'}`}
        >
          <div className="trigger" onClick={handleTrigger}>
            {isOpen ? (
              <>
                <img src={immenceName} alt="immence-name" />
                <img src={vectorLeft} alt="vector-left" />
                {/* <FontAwesomeIcon icon={faCaretLeft} /> */}
              </>
            ) : (
              <>
                <img
                  src={immenceIcon}
                  className="immence-icon img-fluid position-relative mt-1"
                  alt="immence-icon"
                />
                <img
                  src={vectorRight}
                  alt="vector-right"
                  className="vector-right"
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

          <div className="sidebar-position">
            <img src={chat} alt="chat-svg" />
            <span>Chat</span>
          </div>

          <div className="sidebar-position">
            <img src={help} alt="help" />
            <span>Help</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
