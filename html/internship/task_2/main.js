        // Dynamic date generation
        let date = new Date()
        let session = date.getFullYear() + " - " + parseInt(date.getFullYear() + 1)
        document.getElementById("year").innerHTML = session

        // Form Validation Section 
        function validateForm(){
            let name = document.getElementById("uname").value
            let phoneNumber = document.getElementById("number").value
            let dob = document.getElementById("dob").value
            let email = document.getElementById("email").value
            console.log(name)
            console.log(phoneNumber)
            console.log(dob)
            console.log(email)
            document.getElementById("username").innerHTML = name
            document.getElementById("phone").innerHTML = phoneNumber
            document.getElementById("dateOfBirth").innerHTML = dob
            document.getElementById("emailAddress").innerHTML = email
        }