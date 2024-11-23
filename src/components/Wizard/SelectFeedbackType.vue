<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['select-feedback-type', 'next']);

const handleSelect = (feedbackType: string): void => {
    emit('select-feedback-type', feedbackType);
    emit('next');
}
</script>

<template>
    <div class="flex justify-between w-full my-5">
        <button @click="handleSelect('ISSUE')"
            class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col justify-center items-center p-5 w-28 cursor-pointer focus:outline-none">
            <div class="w-12">
                <img class="w-full" src="../../assets/images/issue.png" alt="Problema" />
            </div>
            <p class="font-medium mt-1 text-gray-800">Problema</p>
        </button>
        <button @click="handleSelect('IDEA')"
            class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col justify-center items-center p-5 w-28 cursor-pointer focus:outline-none">
            <div class="w-12">
                <img class="w-full" src="../../assets/images/idea.png" alt="Ideia" />
            </div>
            <p class="font-medium mt-1 text-gray-800">Ideia</p>
        </button>
        <button @click="handleSelect('OTHER')"
            class="rounded-xl hover:bg-gray-100 bg-brand-gray flex flex-col justify-center items-center p-5 w-28 cursor-pointer focus:outline-none">
            <div class="w-12">
                <img class="w-full" src="../../assets/images/other.png" alt="Outro" />
            </div>
            <p class="font-medium mt-1 text-gray-800">Outro</p>
        </button>
    </div>
</template>

<style scoped></style>