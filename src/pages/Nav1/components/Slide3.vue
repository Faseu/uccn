<template>
  <section class="section-3">
    <div class="content">FOOTER</div>
  </section>
</template>

<script>
export default {
  name: "Slide1",
  components: {},
};
</script>

<style scoped lang="less">
.section-3 {
  width: 100vw;
  height: 100%;
  background: #333333;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    margin: 0 auto;
    box-sizing: border-box;
    width: 1200px;
    height: 168px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
}
</style>
