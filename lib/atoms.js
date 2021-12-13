import { atom } from "recoil";
export const widthState = atom({
  key: "width",
  default: "0",
});

export const userState = atom({
  key: "user",
  default: null,
});
