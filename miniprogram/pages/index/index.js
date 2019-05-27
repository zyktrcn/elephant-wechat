//index.js
import template from '../template/template'
const app = getApp()

Page({
  data: {
    frigerator: {},
    recipe: {},
    meat: [
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat'
      },
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat'
      },
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat'
      },
      {
        name: '鸡肉',
        image: '/images/chicken.png',
        color: 'meat'
      }
    ],
    fruit: [
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      }
    ],
    vegetable: [
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
      {
        name: '桃子',
        image: '/images/peach.png',
        color: 'fruit'
      },
    ],
    sel: 'meat',
    category: [
      {
        name: 'meat',
        title: '肉类'
      },
      {
        name: 'fruit',
        title: '水果'
      },
      {
        name: 'vegetable',
        title: '蔬菜'
      },
      {
        name: 'others',
        title: '其他'
      }
    ],
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
    pageMaxHeight: 0,
    template: template
  },

  selectTab: function(event) {
    this.setData({
      sel: event.currentTarget.dataset.sel
    })
  },

  onLoad: function() {
    // set tabBar
    let frigerator = app.data.frigerator
    let recipe = app.data.recipe
    this.setData({
      frigerator,
      recipe,
      pageMaxHeight: wx.getSystemInfoSync().windowHeight * 2 - 550
    })

    wx.hideTabBar()
  },

})
