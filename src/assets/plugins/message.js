import Vue from "vue";
import MessageComponent from "@/components/Message";
const NoticeConstructor = Vue.extend(MessageComponent);
let nId = 1;
const Notice = (options) => {
  if (Vue.prototype.$isServer) return; // 判断是否是在服务端渲染
  options = options || {};
  if (typeof options === "string") {
    // 若options为字符串时，将options作为message
    options = {
      message: options,
    };
  }
  let id = "notice-" + nId++;
  const NoticeInstance = new NoticeConstructor({
    // 实例化
    // 实例化带有option的notice
    data: options,
  });
  NoticeInstance.id = id;
  NoticeInstance.vm = NoticeInstance.$mount();
  document.body.appendChild(NoticeInstance.vm.$el); // 将dom插入到body
  NoticeInstance.vm.visible = true;
  NoticeInstance.dom = NoticeInstance.vm.$el;
  NoticeInstance.dom.style.zIndex = nId + 10001; // 控制组件z-index
  return NoticeInstance.vm;
};
["success", "warning", "info", "error"].forEach((type) => {
  // 控制样式
  Notice[type] = (options) => {
    if (typeof options === "string") {
      options = {
        message: options,
      };
    }
    options.type = type;
    return Notice(options);
  };
});

export default Notice;
