<template>
  <div class="header">
      <router-link class="header-item" to="/">Home</router-link>
      <router-link class="header-item" to="/projects">Projects</router-link>
      <router-link class="header-item" to="/social">Social</router-link>
      <router-link class="header-item" to="/contact">Contact</router-link>      
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/variables';

.header {
    height: 60px;
    background-color: $primaryColor2;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;

    .header-item {
        display: inline-block;
        font-family: Encode Sans Wide Regular;
        padding: 18px;
        text-decoration: none;
        font-size: 14pt;
        color: #ffffff;

        &.router-link-exact-active {
            background-color: lighten($primaryColor1, 25%);
        }

        &:hover {
            background-color: $primaryColor3;
        }
    }
}
</style>
