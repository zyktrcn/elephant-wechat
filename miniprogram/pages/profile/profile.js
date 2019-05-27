// miniprogram/pages/profile/profile.js
Page({

  /**
   * Page initial data
   */
  data: {
    tag: [
      {
        name: '沙拉精',
        category: 'vegetable'
      },
      {
        name: '食肉动物',
        category: 'meat'
      },
      {
        name: '水果忍者',
        category: 'fruit'
      }
    ],
    topFood: [
      {
        times: 6,
        image: '/images/chicken.png',
        color: 'meat'
      },
      {
        times: 2,
        image: '/images/chicken.png',
        color: 'meat'
      },
      {
        times: 3,
        image: '/images/chicken.png',
        color: 'meat'
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
