<script setup lang="ts">
import Icon from '../../components/Icon/index.vue';
import palette from '../../../palette.js';
import { resetStore } from '@/store';

const goBack = (): void => {
    resetStore();
}

</script>
<template>
    <div class="flex flex-col items-center justify-between w-full my-5">
        <Icon name="Error" :color="palette.brand.error" size="70" />
        <p class="text-xl font-black text-center w-full mt-2">Droga! Aconteceu algum erro.</p>
        <div class="flex justify-center items-center w-full mt-2">
            <button @click="goBack"
                class="rounded-full font-regular text-sm flex flex-col justify-cente bg-brand-gray items-center py-2 px-5 cursor-pointer focus:outline-none">Tente novamente</button>
        </div>
    </div>
</template>
<style scoped></style>