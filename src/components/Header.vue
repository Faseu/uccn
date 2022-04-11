<template>
  <header class="header">
    <div class="content">
      <router-link class="no-nav-item" to="/">
        <img class="logo" src="../assets/images/logo.svg" alt="" />
      </router-link>
      <nav class="nav-list">
        <router-link class="nav-item" to="/">
          <div @click="switchNav('Nav1')">Nav1</div>
        </router-link>
        <router-link class="nav-item" to="/Nav2">
          <div @click="switchNav('Nav2')">Nav2</div>
        </router-link>
        <router-link class="nav-item" to="/Nav3">
          <div @click="switchNav('Nav3')">Nav3</div>
        </router-link>
        <router-link class="nav-item" to="/Nav4">
          <div @click="switchNav('Nav4')">Nav4</div>
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      nav: "home",
    };
  },
  created() {},
  methods: {
    switchNav(nav) {
      this.nav = nav;
      this.$emit("switchNav", nav);
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  height: 63px;
  width: 100vw;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(208, 208, 208, 0.5);
  .content {
    opacity: 1;
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .no-nav-item:after {
      content: none !important;
    }
    .nav-list {
      width: 500px;
      height: 100%;
      display: flex;
      justify-content: space-between;

      .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        position: relative;
        div {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      .nav-phone {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
    .logo {
      width: 126px;
      height: 31px;
    }
  }
}
.header-none {
  background: rgba(255, 255, 255, 0);
  box-shadow: none;
}
a {
  display: inline-block;
}
.router-link-exact-active {
  color: #fe690c;
}
.router-link-exact-active:after {
  content: "";
  height: 3px;
  width: 64px;
  background: #fe690c;
  position: absolute;
  bottom: 0;
}
</style>
