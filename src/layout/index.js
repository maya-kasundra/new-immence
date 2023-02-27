import React from 'react'
import Head from './head/Head'
import Sidebar from './sidebar/sidebar'

const Layout = () => {
  return (
    <React.Fragment>
      <Head title="Loading" />
      <div className="nk-app-root">
        <div className="nk-main">
          <Sidebar />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout
