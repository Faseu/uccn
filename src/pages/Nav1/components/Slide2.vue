<template>
  <section class="section-2">
    <div class="content">Nav1 section-2</div>
  </section>
</template>

<script>
export default {
  name: "Slide1",
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="less">
.section-2 {
  width: 100vw;
  height: 100%;
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
</style>
