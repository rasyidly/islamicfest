<template>
    <transition enter-from-class="opacity-0" enter-active-class="transition duration-100" enter-to-class="opacity-100" leave-from-class="opacity-100" leave-active-class="transition" leave-to-class="opacity-0">
        <div v-if="loading" class="absolute -inset-2 bg-white/75 grid place-items-center z-50 cursor-default">
            <div class="loader"></div>
        </div>
    </transition>
</template>

<script setup>
const props = defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.loader {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #3b82f5 94%, #0000) top/3px 3px no-repeat, conic-gradient(#0000 30%, #3b82f5);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
    animation: s3 .5s infinite linear;
}

@keyframes s3 {
    100% {
        transform: rotate(1turn)
    }
}
</style>