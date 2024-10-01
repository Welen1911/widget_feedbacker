<script setup lang="ts">
import StandBy from './StandBy.vue';
import Box from './Box.vue';
import { Component, reactive } from 'vue';

type State = {
    component: Component
}

const state = reactive<State>({
    component: StandBy
});

const handleOpenBox = (): void => {
    console.log('Abriu a box');
    state.component = Box;
}


const handleCloseBox = (): void => {
    state.component = StandBy;
}

</script>

<template>
    <teleport to='body'>
        <Component @open-box="handleOpenBox" @close-box="handleCloseBox" :is="state.component" />
    </teleport>
</template>
