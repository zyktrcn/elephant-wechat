// pages/item/item.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    food: {
      name: '鸡肉',
      image: '/images/chicken.png',
      color: 'meat',
      tag: [
        {
          title: '高蛋白',
          category: 'protein',
          count: 10
        },
        {
          title: '中脂肪',
          category: 'fat',
          count: 5
        },
        {
          title: '低糖分',
          category: 'sugar',
          count: 1
        }
      ],
      create: 1546272000000,
      advice: '10-15度存放，七天内使用完毕。',
      relate: [
        {
          name: '奶香西兰花鸡胸意面',
          image: '/images/dish_relate.png'
        },
        {
          name: '奶香西兰花鸡胸意面',
          image: '/images/dish_relate.png'
        },
        {
          name: '奶香西兰花鸡胸意面',
          image: '/images/dish_relate.png'
        }
      ]
    }
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
