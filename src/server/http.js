import axios from "axios";

let token = localStorage.getItem("access-token");
console.log(token);
const instance = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 1000
 // headers: token //커스텀 헤더 넣으면 CORS걸림.
});

instance.interceptors.request.use(
  function(config) {
    // 요청 바로 직전
    // axios 설정값
    return config;
  },
  function(error) {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function(response) {
    /*
        http status가 200 -응답 직전
    */
    return response;
  },

  function(error) {
    /*
        http status가 200이 아닌 경우 - 응답 에러
    */
    return Promise.reject(error);
  }
);

export default instance;
