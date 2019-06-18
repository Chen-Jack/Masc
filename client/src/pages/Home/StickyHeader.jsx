import React from 'react'
import { header } from './sticky-header.module.css'

class Header extends React.Component {
    render() {
        return <div className={header}>
            {this.props.children}
        </div>
    }
}

export default Header