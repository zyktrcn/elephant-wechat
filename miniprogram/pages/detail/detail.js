// miniprogram/pages/detail/detail.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    dish: {
      name: '奶香西兰花鸡胸意面',
      image: '/images/dish_top.png'
    },
    material: [
      {
        name: '鸡蛋',
        count: '4个'
      },
      {
        name: '淡奶油',
        count: '200g'
      },
      {
        name: '炼奶',
        count: '150g'
      },
      {
        name: '细砂糖',
        count: '30g'
      },
      {
        name: '柠檬精',
        count: '适量'
      }
    ],
    steps: {
      des: [
        '步骤1注：配料里（一汤匙=15ml、一茶匙=5ml）准备材料。黑木耳用温水泡发开洗净。',
        '步骤2猪里脊肉顺势切成丝，先用一小撮盐和抓捏到发粘。',
        '步骤3一茶匙干淀粉加一点水搅成水淀粉，加入肉丝中用手抓捏到全部被吸收。',
        '步骤4最后加一汤匙色拉油，拌匀后腌制待用。',
        '步骤5冬笋切片后入开水锅中煮两分钟，捞出切丝，胡萝卜去皮切丝，泡发的黑木耳切丝。准备好葱姜蒜末。',
        '步骤6一汤匙干淀粉加三汤匙清水调匀成水淀粉，把料酒、醋、生抽、白糖、香麻油和水调匀成调味汁（材料调味汁部分的所有调料）。',
        '步骤7锅烧热放油，在低油温时倒入肉丝大火煸炒到肉丝表面变色盛出备用。',
        '步骤8用锅中余油煸炒姜蒜末小火炒出香味，再倒入剁椒一起炒出香味。',
        '步骤9倒入冬笋丝、胡萝卜丝和黑木耳丝转大火翻炒一会儿，再倒入肉丝。',
        '步骤10倒入步骤6准备好的调味汁，翻炒一分钟。',
        '步骤11慢慢倒入水淀粉，边倒边炒，直到汤汁呈你想要的浓稠度，关火。',
        '步骤12撒上葱花，出锅。'
      ],
      img: [
        'https://cp1.douguo.com/upload/caiku/5/3/0/200_53ecc8593accde57df1000935a865440.png',
        'https://cp1.douguo.com/upload/caiku/9/6/0/200_96add5bc70a754362b8ef1a3925216a0.png',
        'https://cp1.douguo.com/upload/caiku/9/3/a/200_932ee4b7899de885afb0513295157fda.png',
        'https://cp1.douguo.com/upload/caiku/8/b/3/200_8bba33bf9ce0da2ed1fa6bbc98c97b23.png',
        'https://cp1.douguo.com/upload/caiku/b/0/a/200_b07a0856b5095da0501002ab3451647a.png',
        'https://cp1.douguo.com/upload/caiku/5/2/f/200_526e53be5cbe68da9729453179da79af.png',
        'https://cp1.douguo.com/upload/caiku/3/d/d/200_3d17bb80dd81752292ff786768c794cd.png',
        'https://cp1.douguo.com/upload/caiku/5/4/2/200_5410f37970fd3099c98008476fcc22d2.png',
        'https://cp1.douguo.com/upload/caiku/b/4/8/200_b4fa85bf11447f11ae2a5a2524f44a98.png',
        'https://cp1.douguo.com/upload/caiku/5/1/0/200_51c32e8633f378f53bd0caf366aa1040.png',
        'https://cp1.douguo.com/upload/caiku/f/e/c/200_fead9967d7ffc0d79e8612006777b51c.png',
        'https://cp1.douguo.com/upload/caiku/5/6/1/200_564a4e823624b5483231ed2029c24cb1.png'
      ]
    },
    scrollerHeight: 0
  },

  choose: function() {
    wx.navigateTo({
      url: '/pages/choose/choose',
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    let { steps } = this.data
    let newSteps = []
    for (let i=0; i<steps.des.length; i++) {
      newSteps.push({
        title: steps.des[i].slice(0, i < 9 ? 3 : 4),
        des: steps.des[i].slice(i < 9 ? 3 : 4, steps.des[i].length),
        img: steps.img[i]
      })
    }
    this.setData({
      steps: newSteps,
      scrollerHeight: wx.getSystemInfoSync().windowHeight * 2 -144
    })
    console.log(newSteps)
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
