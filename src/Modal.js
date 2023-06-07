import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'rgb(255, 255, 255)',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1% 1% 1% 1%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    zIndex: 1000,
    height: '90%',
    overflow: 'auto', // Added overflow property
    width: '80%'
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000
}

const BUTTON_STYLES = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '1.5rem',
    cursor: 'pointer',
  };

const CONTENT_STYLES = {
    padding: '10px', // Adjust padding as needed
  };

export default function Modal({ children, onClose }) {

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} onClick={onClose}/>
            <div style={MODAL_STYLES}>
                <button className='btn bg-danger fs-4' style={BUTTON_STYLES} onClick={onClose}> X </button>
                <div style={CONTENT_STYLES}>{children}</div>
            </div>
        </>,
        document.getElementById('cart-root')
    )
}