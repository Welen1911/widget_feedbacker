<script>
import Copy from './Copy.vue';
import Loading from './Loading.vue';
import ChevronDown from './ChevronDown.vue';
import Chat from './Chat.vue';

export default {
   components: {
    Loading,
    Copy,
    ChevronDown,
    Chat
   },
    props: {
        name: {
            type: String,
            required: true
        }
    }
}

</script>

<template>
    <component :is="name" v-bind="$props"></component>
</template>