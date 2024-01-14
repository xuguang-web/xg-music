import xgRequest from "./request";

export function getBannerList() {
  return xgRequest.get("/top/mv");
}

export function getTopList(idx) {
  return hyRequest.get("/top/list", {
    idx,
  });
}
