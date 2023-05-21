<template>
    <div class="bg-gray-100 border-b-4 border-gray-950">
        <section id="speakers" class="p-8 lg:py-20">
            <h2 class="mb-8 text-3xl font-bold text-center lg:text-4xl">Narasumber dan Bintang Tamu</h2>
            <div class="mx-auto space-y-8 max-w-7xl">
                <div id="speakers-talk" class="flex flex-col mx-auto border-4 divide-y-4 lg:divide-y-0 lg:divide-x-4 lg:flex-row border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                    <div class="flex flex-col md:flex-row md:items-center gap-4 p-8 text-4xl font-bold bg-indigo-500 lg:items-start lg:justify-between lg:flex-col lg:p-16">
                        <PhMicrophoneStage :size="64" />
                        <h3>Panggung Toughtful Talk</h3>
                    </div>
                    <div class="overflow-x-auto bg-white">
                        <ul class="flex py-10 flex-nowrap">
                            <li class="px-6 text-center min-w-max" v-for="speaker in speakers">
                                <figure class="grid place-items-center">
                                    <img class="w-56" src="https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg" alt="">
                                </figure>
                                <h1 class="text-2xl font-bold">{{ speaker.name }}</h1>
                                <div class="text-lg text-indigo-500">{{ speaker.as }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="speakers-music" class="flex flex-col mx-auto border-4 divide-y-4 lg:divide-y-0 lg:divide-x-4 lg:divide-x-reverse lg:flex-row-reverse border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                    <div class="flex flex-col md:flex-row md:items-center gap-4 p-8 text-4xl font-bold bg-pink-500 lg:items-start lg:justify-between lg:flex-col lg:p-16">
                        <PhMusicNotes :size="64" />
                        <h3>Panggung Musik</h3>
                    </div>
                    <div class="overflow-x-auto bg-white">
                        <ul class="flex py-10 flex-nowrap">
                            <li class="px-6 text-center min-w-max" v-for="musician in musicians">
                                <figure class="grid place-items-center">
                                    <img class="w-56" src="https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg" alt="">
                                </figure>
                                <h1 class="text-2xl font-bold">{{ musician.name }}</h1>
                                <div class="text-lg text-indigo-500">{{ musician.as }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lg:grid lg:grid-cols-2 lg:space-x-8">
                    <div id="speakers-dakwahtainment" class="mb-8 lg:mb-0">
                        <div class="border-4 divide-y-4 border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                            <div class="flex flex-col md:flex-row md:items-center gap-4 p-8 text-4xl font-bold bg-amber-500">
                                <PhSpeakerHigh :size="64" />
                                <h3>Dakwahtainment</h3>
                            </div>
                            <div class="overflow-x-auto bg-white">
                                <ul class="flex py-10 flex-nowrap">
                                    <li class="px-6 text-center min-w-max" v-for="preacher in preachers">
                                        <figure class="grid place-items-center">
                                            <img class="w-56" src="https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg" alt="">
                                        </figure>
                                        <h1 class="text-2xl font-bold">{{ preacher.name }}</h1>
                                        <div class="text-lg text-amber-500">{{ preacher.as }}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div id="speakers-comedy">
                        <div class="border-4 divide-y-4 border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                            <div class="flex flex-col md:flex-row md:items-center gap-4 p-8 text-4xl font-bold text-white bg-gray-950">
                                <PhMaskHappy :size="64" />
                                <h3>Panggung Komedi</h3>
                            </div>
                            <div class="overflow-x-auto bg-white">
                                <ul class="flex py-10 flex-nowrap">
                                    <li class="px-6 text-center min-w-max" v-for="comedian in comedians">
                                        <figure class="grid place-items-center">
                                            <img class="w-56" src="https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg" alt="">
                                        </figure>
                                        <h1 class="text-2xl font-bold">{{ comedian.name }}</h1>
                                        <div class="text-lg text-gray-500">{{ comedian.as || '' }}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { PhMicrophoneStage, PhMusicNotes, PhSpeakerHigh, PhMaskHappy } from '@phosphor-icons/vue'

const speakers = [
    {
        name: 'Yaqut Cholil Qoumas',
        as: 'Menteri Agama'
    },
    {
        name: 'Alissa Wahid',
        as: 'Jaringan Gusdurian'
    },
    {
        name: 'Savic Ali',
        as: 'PBNU'
    },
    {
        name: 'Zainal Abidin Bagir',
        as: 'UGM'
    },
    {
        name: 'Ernest Prakasa',
        as: 'Founder Ayah ASI'
    },
    {
        name: 'Andreas Harsono',
        as: 'Yayasan Pantau'
    },
    {
        name: 'Uni Lubis',
        as: 'Jurnalis Perempuan'
    },
    {
        name: 'Faqihudin Abdul Qadir',
        as: 'Akademisi'
    }
]

const musicians = [
    {
        name: 'Armand Maulana'
    },
    {
        name: 'Kikan Namara'
    },
    {
        name: 'Sandy Canester'
    },
    {
        name: 'Panji Sakti'
    }
]

const preachers = [
    {
        name: 'Login',
        as: 'Habib Husein Jafar & Onad'
    },
    {
        name: 'Shihab - Shihab',
        as: 'Quraish Shihab dan Najwa Shihab'
    }
]

const comedians = [
    {
        name: 'Gigih Adiguna'
    },
    {
        name: 'Priska Barusegu'
    },
    {
        name: 'Benedictivity'
    },
    {
        name: 'Mukti Chandra'
    },
    {
        name: 'Yusril Fahriza'
    },
]
</script>