// miniprogram/pages/dish/dish.js
import template from '../template/template'
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    frigerator: {},
    recipe: {},
    dishes: [],
    template: template
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // set tabBar
    this.setData({
      frigerator: app.data.frigerator,
      recipe: app.data.recipe,
      dishes: app.data.dishes
    })

    wx.hideTabBar()
  }
})
