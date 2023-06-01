<template>
    <section id="timeline" class="border-b-4 bg-amber-500 border-gray-950">
        <div class="container p-8 mx-auto lg:p-20 max-w-8xl">
            <div class="lg:flex lg:space-x-24 lg:items-center">
                <h2 class="mb-8 text-3xl font-bold text-center lg:text-4xl xl:text-6xl">Rundown</h2>
                <div class="overflow-x-auto lg:flex lg:space-x-4 pe-4">
                    <div v-for="timeline in timelines" class="border-4 rounded-lg bg-white border-gray-950 p-6 lg:p-16 mb-4 shadow-[8px_8px_0_#d57e2b]">
                        <h3 class="mb-8 text-3xl font-bold lg:text-4xl">{{ timeline.date }}</h3>
                        <ol class="sm:flex flex-nowrap">
                            <li v-for="event in timeline.events" class="relative mb-6 sm:mb-0 min-w-[16rem]">
                                <div class="flex items-center">
                                    <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white sm:ring-8 shrink-0">
                                        <PhCalendarCheck class="text-indigo-500" :size="24" />
                                    </div>
                                    <div class="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div class="mt-3 sm:pr-8">
                                    <h3 class="text-lg font-semibold text-gray-900">{{ event.time }}</h3>
                                    <p class="text-base font-normal text-gray-500">{{ event.name }}</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { PhCalendarCheck } from '@phosphor-icons/vue';

const timelines = [
    {
        date: 'Jumat, 09 Juni 2023',
        events: [
            {
                time: '16.00 - 17.30',
                name: 'Welcoming Ceremony'
            },
            {
                time: '19.30 - 22.00',
                name: 'Comedy, Music & Toughtful Talk'
            },
        ]
    },
    {
        date: 'Sabtu, 10 Juni 2023',
        events: [
            {
                time: '09.00 - 12.00',
                name: 'Music, Comedy & Media Gathering'
            },
            {
                time: '13.00 - 15.00',
                name: 'Dakwah, Comedy & Music Performance'
            },
            {
                time: '16.00 - 17.30',
                name: 'Book Talk & Bazaar'
            },
            {
                time: '20.00 - 22.00',
                name: 'Funtustic Stage'
            },
        ]
    }
]
</script>