import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : "absolute",
        top: "100vh",
        width: "100%"
    }
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            Copyright &copy; TodoList.com
        </footer>
    )
}