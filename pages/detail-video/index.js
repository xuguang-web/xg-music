import { getMVDetail, getMVURL, getRelateMV } from "../../service/video";
Page({
  data: {
    mvInfo: {},
    mvURL: {},
    relatedMV: [],
  },
  onLoad(options) {
    const id = options.id;
    this.getVideoInfo(id);
  },

  getVideoInfo: function (id) {
    // 1.mv detail
    getMVDetail(id).then((res) => {
      this.setData({ mvInfo: res.data });
    });

    // 2.mv url
    getMVURL(id).then((res) => {
      this.setData({ mvURL: res.data });
    });

    // 3.related mv
    getRelateMV(id).then((res) => {
      console.log(
        "%c [  ]-27",
        "font-size:13px; background:pink; color:#bf2c9f;",
        res
      );
      this.setData({ relatedMV: res.data });
    });

    console.log(
      "%c [ 推荐视频 ]-30",
      "font-size:13px; background:pink; color:#bf2c9f;",
      this.data.relatedMV
    );
  },
});
