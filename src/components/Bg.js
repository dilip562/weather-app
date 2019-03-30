import React from 'react'
import ReactDOM from 'react-dom'
import '../css/bg.css'

const Bg = () => {
    return ReactDOM.createPortal(
        <div className="bg1"></div>,
        document.getElementById('bg')
    )
}

export default Bg;