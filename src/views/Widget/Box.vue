<script setup lang="ts">
import { computed, ComputedRef, SetupContext } from 'vue';
import { brand } from '../../../palette';
import colors from 'tailwindcss/colors';
import useStore from '@/hooks/store';

const store = useStore();

const label = computed<string>(() => {
    if (store.feedbackType === 'ISSUE') {
        return 'Reporte um problema';
    } else if (store.feedbackType === 'IDEA') {
        return 'Reporte uma ideia';
    } else if (store.feedbackType === 'OTHER') {
        return 'Reporte sua mensagem';
    }

    return 'O que você tem em mente?';
});

const canGoback = computed<boolean>(() =>
    store.currentComponent === 'SelectFeedbackType'
);

const canShowAdditionalControlAndInfor = computed<boolean>(() =>
    store.currentComponent != 'Success' && store.currentComponent != 'Error'
);

</script>
<template>
    <div class="box animate__animated animate__fadeInUp animate__faster">

    </div>
</template>

<style lang="postcss" scoped>
.box {
    @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
    width: 400px;
}
</style>