import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
export function getToken() {
    let token = localStorage.token;
    console.log(token ,'token')
    if (token) return token;
    const querystring = require("querystring");
    var hashList = location.hash.split("?");
    let queryObj = querystring.parse(hashList[1]);
    location.hash = hashList[0]
    if (queryObj.token) {
      localStorage.setItem("token", queryObj.token);
      setTimeout(() => {
        location.hash = hashList[0];
      }, 200);
      return queryObj.token
    }else{

    }
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  localStorage.setItem("token",'');
  return Cookies.remove(TokenKey)
}
