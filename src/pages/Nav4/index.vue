<template>
  <div class="page">
    <section class="section-1">
      <div class="content">Nav4 section-1</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Nav2",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.page {
  .section-1 {
    width: 100vw;
    height: calc(100vh - 63px);
    display: flex;
    align-items: center;

    .content {
      position: relative;
      margin: auto;
      width: 1200px;
      height: 408px;
      background: #dcdcdc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
