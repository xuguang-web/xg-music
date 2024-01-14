import { getTopMV } from "../../service/video";
Page({
  data: {
    topMVList: [],
  },
  onLoad: function (options) {
    this.getTopMvs();
  },
  async getTopMvs() {
    const res = await getTopMV(0);
    this.setData({
      topMVList: res.data,
    });
  },
  async onPullDownRefresh() {
    const res = await getTopMV(0);

    console.log(
      "%c [  ]-18",
      "font-size:13px; background:pink; color:#bf2c9f;",
      res
    );
    this.setData({
      topMVList: res.data,
    });
  },
  async onReachBottom() {
    const res = await getTopMV(this.data.topMVList.length);
    const { hasMore, data } = res;
    if (!hasMore) {
      return;
    }
    this.setData({
      topMVList: this.data.topMVList.concat(data),
    });
  },
});
