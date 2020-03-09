Page({
  data: {
    city:'',
    iconSize: [20, 30, 40, 50, 60, 25],
    iconColor: [
      '#000'
    ],
    iconType: [
      'search'
    ],
    arr:'',
    indexs:0,
    arr2: ['CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞', 'CoCo的青稞'],
    colors: ['#97715e', '#2d2926', '#004072','#ff4236'],
    imgs: ['../../img/images/waste/resave.png', '../../img/images/waste/hai.png', '../../img/images/waste/index.png','../../img/images/waste/other.png']
  },
  setIndex(i) {
    this.setData({
      indexs: i.currentTarget.dataset.id
    })
  },
  onLoad: function(options) {
    wx.request({
      url: 'https://www.lajiflw.cn/rubbish/category',
      success: (a) => {
        for (var i = 0; i < a.data.data.length; i++) {
          a.data.data[i].common = a.data.data[i].common.split("、")
        }
        this.setData({
          arr : a.data.data
        })
        console.log(this.data.arr)
      }
    })

  },
  onReady: function() {
    wx.setNavigationBarTitle({
      title: '垃圾分类指南'
    })
  },
  onShow: function() {
    var app = getApp()
    this.setData({
      city: app.globalData.city
    })
    console.log(app)
  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})