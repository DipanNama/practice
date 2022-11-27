import React from 'react'
import Swal from 'sweetalert2'
export const Search = (props) => {
    Swal.fire({
        title: 'Searching...',
        text: 'Searching for the query that you have entered!!!',
        icon: 'info',
        showConfirmButton: true,
        showDenyButton: true
    })
    return (
        <div></div>
    )
}