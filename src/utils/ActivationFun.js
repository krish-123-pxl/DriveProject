const ActivationFun = async (email, actCode) => {
    const API_URL = "http://localhost/stpdrive/api/user/check_act_code.php";
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("code", actCode);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };
    let obj = {};
    await fetch(`${API_URL}?email=${email}&code=${actCode}`, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            obj = result;
        })
        .catch((error) => {
            console.error(error);
        });
    return obj;
}
export default ActivationFun;