import xgRequest from "./request";

export function getTopMV(offset, limit = 20) {
  return xgRequest.get("/top/mv", {
    offset,
    limit,
  });
}

export function getMVDetail(id) {
  return xgRequest.get("/mv/detail", {
    mvid: id,
  });
}
