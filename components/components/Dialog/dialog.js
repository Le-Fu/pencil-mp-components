const isType = (o, t) => {
  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase() === t.toString().toLowerCase();
}
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dialogType: {
      type: String,
      value: ''
    },
    isShowCancel: {
      type: Boolean,
      value: false
    },
    // 弹窗取消按钮文字
    cancelText: {
      type: String,
      value: '取消'
    },
    // 弹窗确认按钮文字
    confirmText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hideDialog() {
      this.setData({
        visible: false
      })
    },
    //展示弹框
    showDialog(config) {
      if (!config) { 
        this.setData({
          visible: true
        })
      } else if (isType(config, 'string')) {
        this.setData({
          visible: true,
          content: config
        })
      } else if (isType(config, 'object')) {
        this.setData({
          ...config,
          visible: true
        })
      }
    },
    _cancelEvent: function () {
      var okEventDetail = {} // detail对象，提供给事件监听函数
      var okEventOption = {} // 触发事件的选项
      this.triggerEvent('cancelEvent', okEventDetail, okEventOption)
    },
    _confirmEvent: function () {
      var cancelEventDetail = {} // detail对象，提供给事件监听函数
      var cancelEventOption = {} // 触发事件的选项
      this.triggerEvent('confirmEvent', cancelEventDetail, cancelEventOption)
    }
  }
})

