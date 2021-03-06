import React from 'react'
import './CSS/modal.css'

export default function Modal({ open, children, onClose }) {
    if (!open) return null

  return (
    <>
        <div id="modal-overlay" />
        <div id="modal-wrapper"> 
            {children}
            <button onClick={onClose}>Close</button>
        </div>
    </>
    )
}