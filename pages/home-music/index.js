import { getBannerList } from "../../service/music";
Page({
  data: {
    bannerList: [],
  },
  onLoad() {
    this.getBannerList();
  },
  getBannerList() {},
});
