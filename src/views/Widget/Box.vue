<script setup lang="ts">
import { computed, ComputedRef, SetupContext } from 'vue';
import { brand } from '../../../palette';
import colors from 'tailwindcss/colors';
import useStore from '@/hooks/store';
import Icon from '@/components/Icon/index.vue';
import Wizard from '@/components/Wizard/index.vue';
import useNavigation from '@/hooks/navigation';

const store = useStore();

const { back } = useNavigation();

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
        <div :class="{
            'justify-between': canShowAdditionalControlAndInfor,
            'justify-end': !canShowAdditionalControlAndInfor,

        }" class="relative w-full flex">
            <button v-if="canShowAdditionalControlAndInfor" @click="back" :disabled="canGoback" :class="{
                'invisible': canGoback
            }" class="text-xl text-gray-800 focus-outline-none">
                <Icon name="ArrowRight" :color="colors.gray['800']" />
            </button>
            <p v-if="canShowAdditionalControlAndInfor" class="text-xl font-black text-center text-brand-main">
                {{ label }}
            </p>

            <button @click="$emit('close-box')" class="text-xl text-gray-800 focus:outline-none">
                <Icon size="14" name="Close" :color="colors.gray['800']" />
            </button>
        </div>
        <Wizard />
        <div class="text-gray-800 text-sm flex" v-if="canShowAdditionalControlAndInfor">
            <Icon name="chat" class="mr-1" :color="colors.gray['800']" />
            Widget by
            <span class="ml-1 font-bold">
                Feedbacker
            </span>
        </div>
    </div>
</template>

<style lang="postcss" scoped>
.box {
    @apply fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-white rounded-xl py-5 px-5 flex flex-col items-center shadow-xl select-none;
    width: 400px;
}
</style>