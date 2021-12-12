import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LeftBar from './LeftBar'
import "./styles/Layout.css"

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <div className="layout-left">
                <LeftBar/>
            </div>
            <div className="layout-right">
                <Header/>
                <div className="main-container">
                    <main>{children}</main>
                </div>
                <Footer />
            </div>

        </React.Fragment>
    )
}

export default Layout
