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

export function getMVURL(id) {
  return xgRequest.get("/mv/url", {
    id,
  });
}

export function getRelateMV(id) {
  return xgRequest.get("/related/allvideo", {
    id,
  });
}


