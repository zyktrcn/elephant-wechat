// miniprogram/pages/photo/photo.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    height: 0,
    photo: '',
    camera: '',
    cameraOpen: true
  },

  takePhoto: function () {
    if (!this.data.cameraOpen) return
    const { camera } = this.data
    camera.takePhoto({
      success: (res) => {
        this.setData({
          photo: res.tempImagePath,
          cameraOpen: false
        })
      }
    })
  },

  reset: function () {
    this.setData({
      photo: '',
      cameraOpen: true
    })
  },

  confirm: function() {
    wx.redirectTo({
      url: '/pages/result/result',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      height: wx.getSystemInfoSync().windowHeight * 2,
      camera: wx.createCameraContext()
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
