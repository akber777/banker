import { atom } from "recoil";

export const apiValue = atom({
  key: "api",
  default: "/latest",
});

export const apiLatest = atom({
  key: "apiLatest",
  default: "/latest",
});

export const pageRequired = atom({
  key: "pageRequired",
  default: 1,
});

export const numberRequired = atom({
  key: "numberRequired",
  default: 20,
});

export const pageMostRead = atom({
  key: "pageMostRead",
  default: 1,
});

export const numberMostRead = atom({
  key: "numberMostRead",
  default: 20,
});

export const newsList = atom({
  key: "newsListAll",
  default: [],
});

