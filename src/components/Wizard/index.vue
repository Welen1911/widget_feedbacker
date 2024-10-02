<script setup lang="ts">
import useNavigation from '@/hooks/navigation';
import useStore from '@/hooks/store';
import { setFeedbackType } from '@/store';

const store = useStore();

const { next } = useNavigation();

const handleSelectFeedbackType = (type: string): void => {
    setFeedbackType(type);
}
</script>

<template>
    <component :is="store.currentComponent" @select-feedback-type="handleSelectFeedbackType" @next="next" />
</template>

<style scoped></style>