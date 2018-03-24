<template>
  <div id="app">
    <Header/>
    <transition name="fade" mode="out-in">
        <router-view/>        
    </transition>
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { Github } from '@/services/Github';

@Component({
    components: {
        Header,
        Footer
    }
})
export default class App extends Vue {
    constructor() {
        super();

        const git = Github.getInstance();
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
    width: 100vw;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
