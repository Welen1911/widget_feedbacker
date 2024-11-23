<script setup lang="ts">
import { reactive, computed } from 'vue';
import useStore from '../../store/index';
import useNavigation from '@/hooks/navigation';

// const store = useStore();

const {setErrorState} = useNavigation();

type State = {
    feedback: string;
    isLoading: boolean;
    hasError: Error | null;
}

const state = reactive<State>({
    feedback: '',
    isLoading: false,
    hasError: null
});


const submitButtonIsDisabled = computed<boolean>(() => {
    return !state.feedback.length;
});

const handleError = (error: Error) => {
    state.hasError = error;
    state.isLoading = false;
    setErrorState();
}

const submitAFeedback = () => {
    console.log('Enviando....');
}

</script>

<template>
    <div class="flex flex-col items-center justify-center w-full my-5">
        <textarea v-model="state.feedback" class="w-full rounded-lg border-2 border-gray-300 border-solid h-24 p-2 resize-none focus:outline-none" name="" id=""></textarea>
        <button :disable="submitButtonIsDisabled" :class="{
            'opacity-50' : state.isLoading,
            'opacity-50 bg-gray-100 text-gray-500': submitButtonIsDisabled,
            'bg-brand-main text-white': !submitButtonIsDisabled
        }" @click="submitAFeedback" class="rounded-lg font-black mt-3 flex flex-col justify-center items-center py-2 w-full cursor-pointer focus:outline-none transition-all duration-200">
        <icon v-if="state.isLoading" name="loading" class="animate-spin" color="white" />  
        <template v-else>
            Enviar feedback
        </template> 
    </button>
    </div>
</template>

<style scoped></style>