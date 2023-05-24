<template>
    <div class="bg-gray-100 border-b-4 border-gray-950">
        <section id="speakers" class="p-8 lg:py-20">
            <h2 class="mb-8 text-3xl font-bold text-center lg:text-4xl">Narasumber dan Bintang Tamu</h2>
            <div class="mx-auto space-y-8 max-w-7xl">
                <div id="speakers-talk" class="flex flex-col mx-auto border-4 divide-y-4 lg:divide-y-0 lg:divide-x-4 lg:flex-row border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                    <div class="flex flex-col gap-4 p-8 text-4xl font-bold bg-indigo-500 md:flex-row md:items-center lg:items-start lg:justify-between lg:flex-col lg:p-16">
                        <PhMicrophoneStage :size="64" />
                        <h3>Kajian Pakar</h3>
                    </div>
                    <div class="overflow-x-auto bg-white">
                        <ul class="flex py-10 flex-nowrap">
                            <li class="px-6 text-center min-w-max" v-for="speaker in speakers">
                                <figure class="grid mb-2 place-items-center">
                                    <img class="w-56" :src="speaker.img || 'https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg'" alt="">
                                </figure>
                                <h1 class="text-2xl font-bold">{{ speaker.name }}</h1>
                                <div class="text-lg text-indigo-500">{{ speaker.as }}</div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="speakers-music" class="flex flex-col mx-auto border-4 divide-y-4 lg:divide-y-0 lg:divide-x-4 lg:divide-x-reverse lg:flex-row-reverse border-gray-950 rounded-xl divide-gray-950 overflow-clip">
                    <div class="flex flex-col gap-4 p-8 text-4xl font-bold bg-pink-500 md:flex-row md:items-center lg:items-start lg:justify-between lg:flex-col lg:p-16">
                        <PhMusicNotes :size="64" />
                        <h3>Panggung Musik</h3>
                    </div>
                    <div class="w-full overflow-x-auto bg-white">
                        <ul class="flex py-10 2xl:justify-center flex-nowrap">
                            <li class="px-6 text-center min-w-max" v-for="musician in musicians">
                                <figure class="grid mb-2 place-items-center">
                                    <img class="w-56" :src="musician.img || 'https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg'" alt="">
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
                            <div class="flex flex-col gap-4 p-8 text-4xl font-bold md:flex-row md:items-center bg-amber-500">
                                <PhSpeakerHigh :size="64" />
                                <h3 class="hyphens-manual">Dakwah&shy;tainment</h3>
                            </div>
                            <div class="overflow-x-auto bg-white">
                                <ul class="flex py-10 2xl:justify-center flex-nowrap">
                                    <li class="px-6 text-center min-w-max" v-for="preacher in preachers">
                                        <figure class="grid mb-2 place-items-center">
                                            <img class="w-56" :src="preacher.img || 'https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg'" alt="">
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
                            <div class="flex flex-col gap-4 p-8 text-4xl font-bold text-white md:flex-row md:items-center bg-gray-950">
                                <PhMaskHappy :size="64" />
                                <h3>Panggung Komedi</h3>
                            </div>
                            <div class="overflow-x-auto bg-white">
                                <ul class="flex py-10 flex-nowrap">
                                    <li class="px-6 text-center min-w-max" v-for="comedian in comedians">
                                        <figure class="grid mb-2 place-items-center">
                                            <img class="w-56" :src="comedian.img || 'https://img.freepik.com/premium-vector/avatar-young-man-with-glasses-nerd-geek-brand-character-logo_15870-926.jpg'" alt="">
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
        img: '/images/speakers/yaqut-cholil.png',
        name: 'Yaqut Cholil Qoumas',
        as: 'Menteri Agama'
    },
    {
        img: '/images/speakers/alissa-wahid.png',
        name: 'Alissa Wahid',
        as: 'Jaringan Gusdurian'
    },
    {
        img: '/images/speakers/prof-quraish.png',
        name: 'Prof. M. Quraish Shihab',
        as: 'Pakar Tafsir Alquran'
    },
    {
        img: '/images/speakers/kalis.png',
        name: 'Kalis Mardiasih',
        as: 'Peneliti Isu Perempuan & Anak'
    },
    {
        name: 'Savic Ali',
        as: 'PBNU'
    },
    {
        name: 'Uni Lubis',
        as: 'Jurnalis Perempuan'
    }
]

const musicians = [
    {
        name: 'Panji Sakti'
    },
    {
        name: 'Kotak Band'
    }
]

const preachers = [
    {
        img: '/images/speakers/bib-husein.png',
        name: 'Login',
        as: 'Habib Husein Jafar & Onad'
    }
]

const comedians = [
    {
        name: 'Priska Barusegu'
    },
    {
        name: 'Gigih Adiguna'
    },
    {
        name: 'Benedictivity'
    },
    {
        name: 'Yusril Fahriza'
    },
]
</script>