// miniprogram/pages/choose/choose.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    dish: {
      name: '奶香西兰花鸡胸意面',
      image: '/images/dish_relate.png'
    },
    foods: [
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat',
        reset: true
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'vegetable',
        reset: true
      },
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat',
        reset: false
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit',
        reset: true
      }
    ],
    scrollerHeight: 0
  },

  finish: function(event) {
    const { index } = event.currentTarget.dataset
    const { foods } = this.data
    foods[index].reset = !foods[index].reset
    this.setData({
      foods
    })
    console.log(this.data.foods)
  },

  goDish: function() {
    wx.switchTab({
      url: '/pages/dish/dish',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({
      scrollerHeight: app.data.windowHeight * 2 - 676
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
