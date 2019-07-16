// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      sex: e.detail.value
    })
  },
  formSubmit: function (e) {
    var email = e.detail.value.email;
    var mobile = e.detail.value.mobile;
    var userName = e.detail.value.userName;
    var pwd = e.detail.value.pwd;
    var reply_pwd = e.detail.value.reply_pwd;
    var sex = this.data.sex;
    var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    var mobileReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
   
   var data = {

     email: email,
     mobile: mobile,
     userName: userName,
     pwd: pwd,
     sex: sex

   }

   console.log("====================start==============================")
   console.log("email:"+email);
   console.log("mobile:"+mobile);
   console.log("userName:"+userName);
   console.log("pwd:"+pwd)
   console.log("sex:"+sex);
   console.log("====================end================================")
    if(email == null || email == ""){
      wx.showToast({
        title: "邮箱不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (!emailReg.test(email)){
      wx.showToast({
        title: "邮箱格式不合法",
        icon: 'none',
        duration: 1500
      })
    } else if (mobile == null || mobile == ""){
      wx.showToast({
        title: "手机号不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (!mobileReg.test(mobile)){
      wx.showToast({
        title: "手机号不合法",
        icon: 'none',
        duration: 1500
      })
    } else if (userName == null || userName == ""){
      wx.showToast({
        title: "用户名不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (pwd == null || pwd == ""){
      wx.showToast({
        title: "密码不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (reply_pwd == null || reply_pwd == ""){
      wx.showToast({
        title: "确认密码不能为空",
        icon: 'none',
        duration: 1500
      })
    }else if(pwd != reply_pwd){
      wx.showToast({
        title: "密码与确认密码输入不一致",
        icon: 'none',
        duration: 1500
      })
    } else if (sex == null || sex == ""){
      wx.showToast({
        title: "请选择性别",
        icon: 'none',
        duration: 1500
      })
    }else{

      console.log(data);

      wx.request({

        url: getApp().globalData.urlPath + "sysUser/register",
        method: "POST",
        data: data,
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data.code);
          if (res.statusCode == 200) {

            //访问正常
            if (res.data.code == "000000") {
              wx.showToast({
                title: "注册成功，马上回到登录界面",
                icon: 'success',
                duration: 3000,
                success: function () {

                  wx.navigateTo({
                    url: '../login/login'
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

    }


  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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