import axios from "axios";
const api = axios.create({
  baseURL: `http://13.124.217.154:5000`,
  withCredentials: true,
});
export const userApi = {
  //로그인
  login: (email, password) =>
    api.post(`/login?`, {
      email,
      password,
    }),
  //로그아웃
  logout: () => api.post(`/logout`),
  //회원가입
  signup: (username, email, password) =>
    api.post(`/signup`, {
      username,
      email,
      password,
    }),
};
export const todoApi = {
  // 전체 데이터 가져오기
  getAll: () => {
    return api.get(`/calendar`);
  },
  // 일정 만들기
  createOne: (title, body, time) => {
    return api.post(`/calendar`, {
      title,
      body,
      time,
    });
  },
  // 수정하기
  patchOne: (id, title, body, time, isDone) => {
    return api.patch(`/calendar`, {
      id,
      title,
      body,
      time,
      isDone,
    });
  },
  // 삭제하기
  deleteOne: (id) => {
    api.delete("/calendar", {
      id,
    });
  },
  // 전체 삭제하기
  deleteAll: () => {
    api.delete("/calendar");
  },
};
