Page({
  data: {
    indexs: 0,
    score: 0,
    arr1: [{
      title: "粘毛滚纸",
      type: "干垃圾",
      outcome: ""
    }, {
      title: "团扇",
      type: "干垃圾",
      outcome: ""
    }, {
      title: "紫药水",
      type: "有害垃圾",
      outcome: ""
    }, {
      title: "风衣",
      type: "干垃圾",
      outcome: ""
    }, {
      title: "黑芝麻汤团",
      type: "干垃圾",
      outcome: ""
    }, {
      title: "节能灯管",
      type: "可回收物",
      outcome: ""
    }, {
      title: "杀虫剂喷雾",
      type: "有害垃圾",
      outcome: ""
    }, {
      title: "薄荷糖",
      type: "干垃圾",
      outcome: ""
    }, {
      title: "杀虫剂喷雾",
      type: "有害垃圾",
      outcome: ""
    }, {
      title: "农药",
      type: "有害垃圾",
      outcome: ""
    }],
    arr2: ['湿垃圾', '干垃圾', '可回收物', '有害垃圾']
  },
  nextIndex(e) {
    this.setData({
      indexs: ++this.data.indexs,
      ['arr1[' + (this.data.indexs - 1) + '].outcome']: e.currentTarget.dataset.outcome
    })
   
    if((this.data.indexs+1)==this.data.arr1.length){
      this.setData({
        ['arr1[' + (this.data.arr1.length-1) + '].outcome']: e.currentTarget.dataset.outcome
      })
      var sum=0
      for (var i = 0; i < this.data.arr1.length;i++){
        if (this.data.arr1[i].outcome == this.data.arr1[i].type){
          sum+=10
          this.setData({
            score: sum
          })
        }
      }
    }
  },
  again(){
    this.setData({
      score: 0,
      indexs:0
    })
    for (var i = 0; i < this.data.arr1.length; i++) {
      this.setData({
        ['arr1[' + i + '].outcome']: ''
      })
    }
  },
  onLoad: function(options) {

  },
  onReady: function() {

  },
  onShow: function() {

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