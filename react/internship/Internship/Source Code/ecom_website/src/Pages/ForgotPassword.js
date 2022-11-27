import React from 'react'
import Swal from 'sweetalert2'
export const ForgotPassword = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    return (
        <div>{
            Toast.fire({
                icon: 'success',
                title: 'Password reset link send successfully !!!'
            })}
        </div>
    )
}
