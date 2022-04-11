<template>
  <div id="app">
    <Header @switchNav="switchNav" />
    <router-view />
    <Footer v-if="footerShow" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      footerShow: false,
    };
  },
  created() {
    const re1 = /Nav2/g;
    const re2 = /Nav3/g;
    const re3 = /Nav4/g;
    if (
      re1.test(window.location.href) ||
      re2.test(window.location.href) ||
      re3.test(window.location.href)
    ) {
      this.footerShow = true;
    }
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    switchNav(nav) {
      this.footerShow = nav !== "Nav1";
    },
  },
};
</script>
