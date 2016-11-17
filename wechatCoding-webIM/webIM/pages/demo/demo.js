Page({
    data: {
        result: '',
        array: [{
            message: 'foo',
            }, {
            message: 'bar'
            }]
    },
    onLoad: function() {
        var that = this
        wx.request({
          url: "https://a1.sdb.easemob.com/easemob-demo/chatdemoui/token",
          data: {
              grant_type: "password",
              username: 'asdfghj',
              password: '123456',
          },
          header: {
              'content-type': 'application/json'
          },
          method: 'POST', 
          success: function(res){ 
             that.setData({
                 result: res.data.user.uuid
             })
          }
      })
    }
})