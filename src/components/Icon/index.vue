<script>
import Copy from './Copy.vue';
import Loading from './Loading.vue';
import ChevronDown from './ChevronDown.vue';
import Chat from './Chat.vue';
import Close from './Close.vue';
import ArrowRight from './ArrowRight.vue';
import Checked from './Checked.vue';
import Error from './Error.vue';

export default {
   components: {
    Loading,
    Copy,
    ChevronDown,
    Chat,
    Close,
    ArrowRight,
    Checked,
    Error
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