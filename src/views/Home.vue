<template>
  <div class="home">
      <div class="home-name">Daniel J Dorrity</div>
      <div class="home-tag">web developer | software engineer</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
    margin: 0 auto;
    padding-top: 150px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .home-name {
        font-size: 54pt;
        font-weight: 100;
    }

    .home-tag {
        font-size: 24pt;
        font-weight: 100;
    }
}
</style>
