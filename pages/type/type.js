// pages/type/type.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    types: ""
  },
  editType: function (e) {
     var typeId =  e.currentTarget.dataset['id'];
     console.log("edit:"+typeId);


    wx.navigateTo({
      url: '../type_edit/type_edit?typeId=' + typeId
    })
  },
  delType:function(e){

    var typeId = e.currentTarget.dataset['id'];

    console.log("delete:"+typeId)


    wx.showModal({
      title: '提示',
      content: '确认要删除该支出类型?',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')

          wx.request({

            url: getApp().globalData.urlPath + "spendingType/delete",
            method: "POST",
            data: {
              typeId: typeId
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
              console.log(res.data.code);
              if (res.statusCode == 200) {

                //访问正常
                if (res.data.code == "000000") {
                  wx.showToast({
                    title: "删除成功，返回支出类型列表",
                    icon: 'success',
                    duration: 3000,
                    success: function () {

                      wx.navigateTo({
                        url: '../type/type'
                      })
                    }
                  })

                }
              } else {

                wx.showLoading({
                  title: '系统异常',
                  fail
                })

                setTimeout(function () {
                  wx.hideLoading()
                }, 2000)
              }

            }
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.setNavigationBarTitle({

    //   title: "支出类型列表"

    // })
    var userCode = wx.getStorageSync('userId');
    var self = this
    wx.request({
      url: getApp().globalData.urlPath + "spendingType/types",//json数据地址 
      data: {
        userCode: userCode
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        self.setData({

          types: res.data.data

        });//等同于

      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})