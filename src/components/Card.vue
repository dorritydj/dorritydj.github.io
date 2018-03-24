<template>
    <div class="card" @click="onClick">
        <p class="name">{{project.name}}</p>
        <p class="desciption">{{project.description}}</p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Card extends Vue {
    @Prop() private project: any;

    constructor() {
        super();
    }

    onClick() {
        window.open(this.project.url, '_blank');
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

.card {
    min-width: 200px;
    width: 25vw;
    background-color: $primaryColor3;
    margin: 25px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    .name {
        font-size: 20px;
    }

    &:hover {
        transform: scale(1.1);
    }
}
</style>
