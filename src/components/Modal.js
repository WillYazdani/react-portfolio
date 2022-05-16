import React from 'react'
import ReactDOM from 'react-dom'
import './CSS/modal.css'

export default function modal({ open, children, onClose }) {
    if (!open) return null

  return ReactDOM.createPortal(
    <>
        <div id="modal-overlay" />
        <div id="modal-wrapper"> 
            <button onClick={onClose}>Close</button>
            {children} 
        </div>
    </>,
    document.getElementById('portal')
    )
}