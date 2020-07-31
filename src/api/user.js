import http from "@/server/http";

export default {
  getUserInfo() {
    return http({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: "/users/2",
      method: "get"
    });
  }
};
