const SignUpFun = (name,email,password,setStatus,setMsg,setEmail,setTabs) => {
    // console.log("coming")
    const formdata = new FormData();
            formdata.append("name", name);
            formdata.append("email", email);
            formdata.append("password", password);

            const requestOptions = {
                method: "POST",
                body: formdata,
                redirect: "follow"
            };
            setStatus(true);

            fetch("http://localhost/stpdrive/api/user/create.php", requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    if (result.message == "sent") {
                        console.log(result)
                        setEmail(result.email);
                        setTabs({ signUp: false, activationForm: true });
                    }
                    if(result.message == "present"){
                        setStatus(false);
                        setMsg("Email Allready Registered !");
                    }
                    else{
                        setStatus(false);
                        setMsg("Registration failed");
                    }
                })
                .catch((error) => {console.error(error)
                    setStatus(false);
                });

}

export default SignUpFun
