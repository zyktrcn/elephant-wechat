//index.js
const app = getApp()

Page({
  data: {
    frigerator: {},
    recipe: {}
  },

  onLoad: function() {
    // set tabBar
    let frigerator = app.data.frigerator
    let recipe = app.data.recipe
    this.setData({
      frigerator,
      recipe
    })
  },

})
