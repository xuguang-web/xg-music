import { getTopMV } from "../../service/video";
Page({
  data: {
    topMVList: [],
    hasMore: true,
  },
  onLoad: function () {
    this.getTopMvs();
  },
  async onPullDownRefresh() {
    this.getTopMvs();
  },
  async onReachBottom() {
    this.getTopMvs(this.data.topMVList.length);
  },
  async getTopMvs(num = 0) {
    const res = await getTopMV(num);
    // 展示加载动画
    if (!this.data.hasMore) {
      return;
    }
    wx.showNavigationBarLoading();
    const { data, hasMore } = res;
    this.setData({
      topMVList: num === 0 ? data : this.data.topMVList.concat(data),
      hasMore,
    });
    wx.hideNavigationBarLoading();
  },
  // 跳转至新页面
  handleItemClick(event) {
    const { id } = event.currentTarget.dataset.item;
    wx.navigateTo({
      url: "/pages/detail-video/index?id=" + id,
    });
  },
});
