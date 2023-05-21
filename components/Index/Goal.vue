<template>
    <section id="goal" class="border-b-4 border-gray-950 bg-gray-100">
        <div class="container mx-auto p-8 lg:p-20 max-w-8xl">
            <h2 class="py-4 px-8 rounded-lg sm:rounded-full border-4 w-min sm:whitespace-nowrap bg-white mx-auto mb-8 lg:mb-20 text-3xl lg:text-4xl font-bold border-gray-950">Tujuan Kegiatan</h2>
            <div class="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-indigo-500 border-4 border-gray-950">
                        <PhWifiHigh class="text-white" :size="48" />
                    </div>
                    <h3 class="text-3xl mb-2 lg:text-4xl font-bold">Networking</h3>
                    <div class="text-lg text-gray-500">Memperkuat jaringan dan kolaborasi antar pengelola media keislaman</div>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-pink-500 border-4 border-gray-950">
                        <PhShareNetwork class="text-white" :size="48" />
                    </div>
                    <h3 class="text-3xl mb-2 lg:text-4xl font-bold">Sharing</h3>
                    <div class="text-lg text-gray-500">Mendiskusikan hambatan dan tantangan pengelolaan media Islam</div>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-amber-500 border-4 border-gray-950">
                        <PhThumbsUp class="text-white" :size="48" />
                    </div>
                    <h3 class="text-3xl mb-2 lg:text-4xl font-bold">Recommendation</h3>
                    <div class="text-lg text-gray-500">Merumuskan rekomendasi bersama untuk para jurnalis, pegiat media, otoritas agama, dan stake holder pemerintahan </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { PhShareNetwork, PhWifiHigh, PhThumbsUp } from '@phosphor-icons/vue';

</script>