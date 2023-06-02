<template>
    <section id="goal" class="border-b-4 border-gray-950 bg-gray-100">
        <div class="container mx-auto p-8 lg:p-20 max-w-8xl">
            <h2 class="py-4 px-8 rounded-lg sm:rounded-full border-4 w-min sm:whitespace-nowrap bg-white mx-auto mb-8 lg:mb-20 text-3xl lg:text-3xl font-bold border-gray-950">Tujuan Kegiatan</h2>
            <div class="grid grid-rows-3 grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 2xl:grid-cols-6 gap-y-8">
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-indigo-500 border-4 border-gray-950">
                        <PhWifiHigh class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Networking</h3>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-pink-500 border-4 border-gray-950">
                        <PhShareNetwork class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Sharing</h3>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-amber-500 border-4 border-gray-950">
                        <PhStar class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Experience</h3>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-teal-500 border-4 border-gray-950">
                        <PhMagicWand class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Inspiration</h3>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-purple-500 border-4 border-gray-950">
                        <PhMicrophone class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Motivation</h3>
                </div>
                <div class="flex flex-col text-center">
                    <div class="mx-auto mb-4 rounded-full grid place-items-center p-4 bg-cyan-500 border-4 border-gray-950">
                        <PhThumbsUp class="text-white" :size="48" />
                    </div>
                    <h3 class="text-2xl mb-2 lg:text-3xl font-bold">Promotion</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { PhShareNetwork, PhWifiHigh, PhThumbsUp, PhStar, PhMicrophone, PhMagicWand } from '@phosphor-icons/vue';

</script>