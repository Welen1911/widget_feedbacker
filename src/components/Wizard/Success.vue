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
        <Icon name="Checked" :color="palette.brand.success" size="70" />
        <p class="text-xl font-black text-center w-full mt-2">Obrigado! Recebemos o seu feedback.</p>
        <div class="flex justify-center items-center w-full mt-2">
            <button @click="goBack"
                class="rounded-full font-regular text-sm flex flex-col justify-cente bg-brand-gray items-center py-2 px-5 cursor-pointer focus:outline-none">Envie
                mais feedbacks</button>
        </div>
    </div>
</template>
<style scoped></style>