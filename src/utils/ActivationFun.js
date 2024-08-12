const ActivationFun = (email,actCode,setStatus,setErrorStatus,setMsg,setTabs) =>{
    const formdata = new FormData();
        formdata.append("email", email);
        formdata.append("code", actCode);

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
        };

        fetch(`http://localhost/stpdrive/api/user/check_act_code.php?email=${email}&code=${actCode}`, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.message);
                if(result.message == "activated"){
                    setStatus(true);
                    setErrorStatus(false);
                    setMsg("Account Activated");
                    setTimeout(() => {
                        {setTabs({signUp:false,activationForm:false,login:true})}
                    }, 1200);
                }
                else if(result.message == "invalid"){
                    setErrorStatus(true);
                    setStatus(false);
                    setMsg("Invalid Code");
                }
                
            })
            .catch((error) => {console.error(error)})
}
export default ActivationFun;