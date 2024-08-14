const SignUpFun = async (name, email, password) => {
    const API_URL = "http://localhost/stpdrive/api/user/create.php";
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("password", password);

    const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
    };
    let obj = {};
    await fetch(`${API_URL}`, requestOptions)
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

export default SignUpFun;