//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    totalCount:"",
    yesterDaySpendingTotal:"",
    recentSevenDaysSpendingTotal:"",
    recentFiftenDaysSpendingTotal:"",
    currentMonthTotalCount:"",
    lastMonthSpendingTotal:"",

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    
    var userCode = wx.getStorageSync('userId').toString();
   
    console.log("userCode:"+userCode);

    var self = this;
    wx.request({
      url: getApp().globalData.urlPath + "sysUser/getByID",//json数据地址 
      data: {
        "userCode": userCode
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: "POST",
      success: function (res) {
        

        console.log("totalCount:" + res.data.totalCount);
        console.log("yesterDaySpendingTotal:" + res.data.yesterDaySpendingTotal);
        console.log("recentSevenDaysSpendingTotal:" + res.data.recentSevenDaysSpendingTotal);
        console.log("recentFiftenDaysSpendingTotal:" + res.data.recentFiftenDaysSpendingTotal);
        console.log("currentMonthTotalCount:" + res.data.currentMonthTotalCount);
        console.log("lastMonthSpendingTotal:" + res.data.lastMonthSpendingTotal);
        self.setData({
          totalCount: res.data.totalCount,
          yesterDaySpendingTotal: res.data.yesterDaySpendingTotal,
          recentSevenDaysSpendingTotal: res.data.recentSevenDaysSpendingTotal,
          recentFiftenDaysSpendingTotal: res.data.recentFiftenDaysSpendingTotal,
          currentMonthTotalCount: res.data.currentMonthTotalCount,
          lastMonthSpendingTotal: res.data.lastMonthSpendingTotal
        });


      }
    })

  },
  getUserInfo: function(e) {
  
  }
})
