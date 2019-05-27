//app.js
App({
  data: {
    frigerator: {
      img: '/images/tab_icon_frigerator_normal.png',
      selected: '/images/tab_icon_frigerator_selected.png',
      url: '/pages/index/index'
    },
    recipe: {
      img: '/images/tab_icon_recipe_normal.png',
      selected: '/images/tab_icon_recipe_selected.png',
      url: '/pages/dish/dish'
    },
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
  onLaunch: function () {
    // wx.hideTabBar()
  }
})
