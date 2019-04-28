Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    saveFormId(v) {
      this.wxlogin(v.detail.formId)
      this.resdata()
    },
    wxlogin(id) {
      var that = this;
      wx.login({
        success: res => {
          console.log(id)
        }
      })
    },
    resdata: function() {
      this.triggerEvent('resdata', 1)
    },
  }
})