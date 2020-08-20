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
  // 전체 켈린더 데이터
  getAll: (userId) => {
    return api.get(`/calendar`, {
      userId,
    });
  },
  // 연도,월 기준 켈린더 데이터
  // yearMonth == 202008 string
  getAllByYearMonth: (userId, yearMonth) => {
    return api.post(`/calendar/${yearMonth}`, {
      userId,
    });
  },
  // 일정 만들기
  createOne: (userId, title, body, startDate, endDate) => {
    return api.post(`/calendar`, {
      userId,
      title,
      body,
      startDate,
      endDate,
    });
  },
  // 일정 수정하기
  patchOne: (id, title, body, time, isDone) => {
    return api.patch(`/calendar`, {
      id,
      title,
      body,
      time,
      isDone,
    });
  },
  // 일정 삭제하기
  deleteOne: (id) => {
    api.delete("/calendar", {
      id,
    });
  },
};
