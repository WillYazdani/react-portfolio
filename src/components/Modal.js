import React from 'react'
import './CSS/modal.css'

export default function modal({ open, children, onClose }) {
    if (!open) return null

  return (
    <>
        <div id="modal-overlay" />
        <div id="modal-wrapper"> 
            <button onClick={onClose}>Close</button>
            {children} 
        </div>
    </>
    )
}
