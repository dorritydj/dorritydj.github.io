<template>
  <div class="footer">
      <p>Daniel J Dorrity &copy; 2018</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
    font-family: Encode Sans Wide Regular;
    height: 5%;
    width: 100%;
    bottom: 0%;
    position: fixed;
    text-align: center;
}
</style>
