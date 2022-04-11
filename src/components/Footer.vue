<template>
  <footer class="footer">
    <div class="content">FOOTER</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less" scoped>
.footer {
  width: 100vw;
  height: 250px;
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
