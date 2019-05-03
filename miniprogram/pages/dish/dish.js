// miniprogram/pages/dish/dish.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    frigerator: {},
    recipe: {},
    dishes: [
      {
        name: '奶香西兰花鸡胸意面',
        image: '/images/dish_bg.png',
        difficulty: '简单',
        time: 30
      },
      {
        name: '奶香西兰花鸡胸意面',
        image: '/images/dish_bg.png',
        difficulty: '简单',
        time: 30
      },
      {
        name: '奶香西兰花鸡胸意面',
        image: '/images/dish_bg.png',
        difficulty: '简单',
        time: 30
      }
    ]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // set tabBar
    let frigerator = app.data.frigerator
    let recipe = app.data.recipe
    this.setData({
      frigerator,
      recipe
    })
  }
})