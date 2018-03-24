<template>
    <div class="projects">
        <div v-for="project in info" v-bind:key="project.name">
            <Card v-bind:project="project"/>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Github } from '@/services/Github';
import Card from '@/components/Card.vue';

@Component({
    components: {
        Card
    }
})
export default class Projects extends Vue {
    private info: any[] = [];
    private git: Github;

    constructor() {
        super();
        this.git = Github.getInstance();
    }

    created() {
        this.info = this.git.getInfo();
    }

    data() {
        return {
            info: []
        };
    }
}
</script>

<style lang="scss" scoped>
.projects {
    display: flex;
    justify-content: space-around;
}
</style>
