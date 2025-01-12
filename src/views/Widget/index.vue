<script setup lang="ts">
import StandBy from './StandBy.vue';
import Box from './Box.vue';
import { Component, onMounted, reactive } from 'vue';
import useIframeControl from '@/hooks/iframe';

type State = {
    component: Component
}

const state = reactive<State>({
    component: StandBy
});

const iframe = useIframeControl();

const handleOpenBox = (): void => {
    console.log('Abriu a box');
    iframe.notifyOpen();
    state.component = Box;
}


const handleCloseBox = (): void => {
    iframe.notifyClose();
    state.component = StandBy;
}

onMounted(() => {
    iframe.updateCoreValuesOnStore();
});

</script>

<template>
    <teleport to='body'>
        <Component @open-box="handleOpenBox" @close-box="handleCloseBox" :is="state.component" />
    </teleport>
</template>
