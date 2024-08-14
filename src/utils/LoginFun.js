const LoginFun = async (email, password) => {
    const API_URL = "http://localhost/stpdrive/api/user/login.php";
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };
    let obj = {};
    await fetch(`${API_URL}?email=${email}&password=${password}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            obj = result;
        })
        .catch((error) => console.error(error));
        return obj;
}
export default LoginFun;