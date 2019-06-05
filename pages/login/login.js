// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""

  },
  formSubmit: function (e) {
    console.log(e.detail.value.email);
    console.log(e.detail.value.pwd)
    var username = e.detail.value.email;
    var password = e.detail.value.pwd;
    var emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    if(username == null || username == ""){
      wx.showToast({
        title: "用户名不能为空",
        icon: 'none',
        duration: 1500
      })
    } else if (!emailReg.test(username)){

      wx.showToast({
        title: "邮箱有误",
        icon: 'none',
        duration: 1500
      })

    }else if(password == null || password == ""){
      wx.showToast({
        title: "密码不能为空",
        icon: 'none',
        duration: 1500
      })
    }else{
      wx.request({

        url: getApp().globalData.urlPath+"sysUser/login",
        method: "POST",
        data: {
          username: username,
          password: password
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res.data);
          if (res.statusCode == 200) {
           
            //访问正常
            if (res.data.code == "000000") {
              wx.showToast({
                title: "登陆成功",
                icon: 'success',
                duration: 2000,
                success: function () {
                  wx.navigateTo({
                    url: '../manage/manage'
                  })

                  wx.setStorage({
                    key: 'userId',
                    data: res.data.user.userCode
                  })
                }
              })

            } else if(res.data.code == "111111") {
              wx.showToast({
                title: "密码错误",
                icon: 'none',
                duration: 1500
              })
            }else{
              wx.showToast({
                title: "该用户不存在",
                icon: 'none',
                duration: 1500
              })
            }
          }else{

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

  }
})
