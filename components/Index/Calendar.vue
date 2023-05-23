<template>
    <div class="flex flex-col-reverse justify-between lg:flex-row lg:divide-x-4 divide-gray-950">
        <section id="schedule" class="relative p-8 overflow-hidden border-b-4 sm:p-12 xl:p-20 border-gray-950">
            <PhCalendarCheck class="absolute z-0 text-gray-100 -bottom-16 -end-16 sm:text-gray-950" weight="thin" :size="360" />
            <div class="relative z-10 max-w-xl mx-auto">
                <div class="flex items-center mb-8 space-x-4">
                    <h2 class="text-3xl font-bold lg:text-4xl">Waktu dan Tempat Pelaksanaan</h2>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center space-x-4">
                        <PhArrowRight :size="24" />
                        <div>
                            <div class="text-gray-400">Hari</div>
                            <div class="text-lg font-bold">Jumat & Sabtu</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <PhArrowRight :size="24" />
                        <div>
                            <div class="text-gray-400">Tanggal</div>
                            <div class="text-lg font-bold">9 & 10 Juni 2023</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <PhArrowRight :size="24" />
                        <div>
                            <div class="text-gray-400">Waktu</div>
                            <div class="text-lg font-bold">09:00 WIB & selesai</div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <PhArrowRight :size="24" />
                        <div>
                            <div class="text-gray-400">Tempat</div>
                            <div class="text-lg font-bold">Redtop Hotel Jakarta</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="calendar" class="px-4 py-4 border-b-4 grow sm:py-12 bg-amber-400 border-gray-950">
            <div class="max-w-xl mx-auto border-4 divide-y-4 border-gray-950 rounded-2xl overflow-clip divide-gray-950">
                <div class="flex justify-between bg-white divide-x-4 divide-gray-950">
                    <div class="p-4 text-xl font-bold">Juni</div>
                    <div class="p-4 text-xl font-bold">2023</div>
                </div>
                <table class="w-full bg-white table-fixed">
                    <thead class="border-b-4 border-gray-950">
                        <tr>
                            <th class="p-4 text-white bg-gray-950">M</th>
                            <th class="p-4 text-white bg-gray-950">S</th>
                            <th class="p-4 text-white bg-gray-950">S</th>
                            <th class="p-4 text-white bg-gray-950">R</th>
                            <th class="p-4 text-white bg-gray-950">K</th>
                            <th class="p-4 text-white bg-gray-950">J</th>
                            <th class="p-4 text-white bg-gray-950">S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 5">
                            <td v-for="(j, d) in 7" :key="d" class="py-2 text-center sm:p-4">
                                <span v-if="((7 * (i - 1)) + j - 4) > 0 && ((7 * (i - 1)) + j - 4) < 31" :class="{ 'text-red-500': [0, 6].includes(d), 'border-2 border-gray-950 rounded-full h-8 sm:h-12 w-8 sm:w-12 grid place-items-center mx-auto': [9, 10].includes((7 * (i - 1)) + j - 4) }">
                                    {{ ((7 * (i - 1)) + j - 4) }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script setup>
import { PhCalendarCheck, PhArrowRight } from '@phosphor-icons/vue'
</script>