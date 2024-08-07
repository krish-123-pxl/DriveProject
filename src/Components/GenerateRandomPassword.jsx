
export default function RandomPassword(){
    const pattern = "6*#Hs)2!hL94&nD)(w7*sk+sq!gZ&Mx_-qC^{.,X[@hV>fDy/g6%;s|sJrk?jR3%*Gb";

    let password = [];
    for(let i=0;i<8;i++){
        let index = Math.floor(Math.random() * pattern.length);
        password[i] = pattern[index];
    }

    return password.join("");

}