import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : "absolute",
        top: "100vh",
        width: "100%"
    }
    let currentYear = new Date();
    currentYear = currentYear.getFullYear();
    return (
        <footer className='bg-dark text-light py-3' style={footerStyle}>
            Copyright &copy;2021-{currentYear} TodosList.com
        </footer>
    )
}