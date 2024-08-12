const LoginFun = (email,password,setMsgFlag,setMsg,setLogedIn,setTabs)=>{
    const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch(`http://localhost/stpdrive/api/user/login.php?email=${email}&password=${password}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.message);
                if(result.message == "notfound"){
                    setMsgFlag(true);
                    setMsg("Email Not Registered !");
                }
                else if(result.message == "wrong"){
                    setMsgFlag(true);
                    setMsg("Wrong Password !");
                }
                else if(result.message == "pending"){
                    setMsgFlag(true);
                    setMsg("Account Not Activated !");
                    setTimeout(() => {
                        {setTabs({signUp:false,activationForm:true,login:false})}
                    }, 1200);
                }
                else if(result.message == "active"){
                    setMsgFlag(false);
                    setLogedIn(true);
                    setMsg("login Successfully !");

                    // redirection here
                }
            })
            .catch((error) => console.error(error));
}
export default LoginFun;