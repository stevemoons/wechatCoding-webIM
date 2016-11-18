//logs.js
var util = require('../../utils/util.js')
var readme = require('../../utils/strophe.js')

console.log(this)
Page({
  data: {
    logs: []
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../demo/demo'
    })
  },
  onLoad: function () {

    console.log(window, document,readme())
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
