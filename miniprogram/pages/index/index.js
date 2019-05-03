//index.js
const app = getApp()

Page({
  data: {
    frigerator: {},
    recipe: {},
    foods: [
      {
        name: '鸡肉',
        width: 104,
        height: 56,
        image: '/images/chicken.png',
        color: 'yellow'
      },
      {
        name: '桃子',
        width: 104,
        height: 80,
        image: '/images/peach.png',
        color: 'pink'
      },
      {
        name: '鸡肉',
        width: 104,
        height: 56,
        image: '/images/chicken.png',
        color: 'yellow'
      },
      {
        name: '桃子',
        width: 104,
        height: 80,
        image: '/images/peach.png',
        color: 'pink'
      }
    ]
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
