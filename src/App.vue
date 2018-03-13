<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
@Component({
    components: {
        Header,
        Footer
    }
})
export default class App extends Vue {
    constructor() {
        super();
    }
}
</script>


<style lang="scss">
@import './assets/variables';

@font-face {
    font-family: Encode Sans Wide Regular;
    src: url('./assets/fonts/EncodeSansWide-Regular.ttf');
    font-weight: 100;
}

body {
    background-color: $primaryColor1;
    margin: 0 auto;
    color: #ffffff;
    text-align: center;
    font-family: Encode Sans Wide Regular;
}
</style>
