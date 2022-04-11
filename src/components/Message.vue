<template>
  <transition name="fade" @after-leave="handleAfterLeave">
    <div
      v-show="visible"
      class="message"
      :class="[`${type}`]"
      @mouseleave="startTimer"
      @mouseenter="clearTimer"
    >
      <div class="message-img">
        <img
          :src="require('../assets/images/message/' + type + '.png')"
          alt=""
        />
      </div>
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      visible: false,
      type: "info",
      message: "",
      duration: 1000,
      timer: null,
    };
  },
  mounted() {
    this.setTimer(); // 组件挂载的时候开始计时，计时完成移除
  },
  methods: {
    setTimer() {
      // 组件停留时间duration
      this.timer = setTimeout(() => {
        this.close();
      }, this.duration);
    },
    close() {
      this.visible = false;
      clearTimeout(this.timer);
    },
    clearTimer() {
      //鼠标移入提醒框时，清除定时器，提醒框持久化显示
      console.log("清除定时器，不会自动消失");
      clearTimeout(this.timer);
    },
    startTimer() {
      // 鼠标离开提醒框，定时器开始计时
      console.log("开始定时器");
      this.setTimer();
    },
    handleAfterLeave() {
      // 移除动画执行完成后，销毁组件，并将其从父节点移除
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>

<style scoped lang="less">
.fade-enter-active {
  animation: fade-in 0.6s ease;
}
.fade-leave-active {
  animation: fade-out 0.6s ease;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
@keyframes fade-out {
  0% {
    opacity: 100%;
  }
  100% {
    opacity: 0;
  }
}
.message {
  position: fixed;
  top: 420px;
  left: 50%;
  z-index: 999;
  min-width: 160px;
  height: 36px;
  transform: translateX(-50%);
  line-height: 40px;
  padding: 0 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #feffff;
  display: flex;
  align-items: center;
  justify-content: center;
  .message-img {
    margin-right: 10px;
    margin-top: -2px;
    width: 24px;
    height: 24px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.info {
  //background-color: rgba(0, 0, 0, 0.2);
}
.success {
  //background-color: rgba(0, 255, 255, 0.2);
}
.warning {
  //background-color: rgba(0, 0, 0, 0);
}
.error {
  //background-color: rgba(0, 0, 0, 0);
}
</style>
