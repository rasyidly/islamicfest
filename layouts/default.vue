<template>
    <div>
        <div class="border-b-4 border-gray-950">
            <div class="container max-w-6xl p-4 mx-auto">
                <LogoIslamicFest class="mx-auto max-h-24 aspect-auto" />
            </div>
        </div>
        <header class="sticky top-0 z-20 flex justify-between border-b-4 divide-x-4 bg-white/90 backdrop-blur-sm border-gray-950 divide-gray-950">
            <nav class="flex justify-between w-full overflow-x-auto">
                <ul class="flex justify-start">
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#about">About Us</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-talk">Kajian</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-music">Entertainment</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" :href="ticketUrl" target="_blank">Tiket</a>
                    </li>
                    <li>
                        <div class="block px-6 py-6 text-gray-400 transition cursor-not-allowed whitespace-nowrap">Galeri</div>
                    </li>
                    <li>
                        <div class="block px-6 py-6 text-gray-400 transition cursor-not-allowed whitespace-nowrap">Testimoni</div>
                    </li>
                </ul>
                <ul class="flex justify-start">
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-pink-500" href="https://instagram.com/islamidotco" target="_blank">
                            <PhInstagramLogo :size="24" />
                        </a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-sky-500" href="https://twitter.com/islamidotco" target="_blank">
                            <PhTwitterLogo :size="24" />
                        </a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-red-500" href="https://youtube.com/islamidotco" target="_blank">
                            <PhYoutubeLogo :size="24" />
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul class="flex justify-start divide-x-4 divide-gray-950">
                    <li>
                        <a class="flex px-6 py-6 space-x-2 transition whitespace-nowrap hover:bg-pink-500 hover:text-white" href="https://wa.me/6285779697337" target="_blank">
                            <PhWhatsappLogo :size="24" />
                            <span class="hidden lg:inline">Contact Us</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex px-6 py-6 space-x-2 text-white transition whitespace-nowrap bg-gray-950 hover:bg-indigo-500" :href="ticketUrl" target="_blank">
                            <PhTicket :size="24" />
                            <span class="hidden lg:inline">Buy Ticket</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer class="p-8 text-white bg-gray-950 lg:p-20">
            <div class="container flex flex-col gap-20 mx-auto xl:flex-row lg:justify-between">
                <div>
                    <h5 class="mb-4 text-xl font-bold text-gray-300">Pelaksana</h5>
                    <div class="flex flex-wrap items-center gap-8">
                        <img class="h-8 lg:my-1.5 aspect-auto" src="/images/islami.svg" alt="">
                    </div>
                </div>
                <div>
                    <h5 class="mb-4 text-xl font-bold text-gray-300">Partner</h5>
                    <div class="flex flex-wrap items-center gap-8">
                        <img class="aspect-auto max-h-12" src="/images/kemenag.png" alt="">
                        <img class="aspect-auto max-h-8" src="/images/unicef.png" alt="">
                    </div>
                </div>
                <div>
                    <h5 class="mb-4 text-xl font-bold text-gray-300">Hubungi kami</h5>
                    <ul class="flex mb-4 space-x-4">
                        <li>
                            <a class="block transition whitespace-nowrap" href="https://instagram.com/islamidotco" target="_blank">
                                <PhInstagramLogo class="text-pink-400" :size="20" />
                            </a>
                        </li>
                        <li>
                            <a class="block transition whitespace-nowrap" href="https://twitter.com/islamidotco" target="_blank">
                                <PhTwitterLogo class="text-sky-400" :size="20" />
                            </a>
                        </li>
                        <li>
                            <a class="block transition whitespace-nowrap" href="https://youtube.com/islamidotco" target="_blank">
                                <PhYoutubeLogo class="text-red-400" :size="20" />
                            </a>
                        </li>
                    </ul>
                    <div class="flex items-start mb-1 space-x-2 text-gray-400 md:items-center">
                        <div class="pt-1 md:pt-0">
                            <PhHouseSimple />
                        </div>
                        <div>Apartement City Light, Jl. Ir H. Juanda, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412</div>
                    </div>
                    <a class="flex items-start mb-1 space-x-2 text-indigo-500 md:items-center" href="mailto:festival@islami.co" target="_blank">
                        <div class="pt-1 md:pt-0">
                            <PhEnvelope />
                        </div>
                        <div>festival@islami.co</div>
                    </a>
                </div>
            </div>
            <hr class="my-6 border-gray-900">
            <div class="container flex flex-row justify-between mx-auto xl:flex-row">
                <div class="text-sm text-gray-500">Copyright &copy; 2023 </div>
                <div class="text-sm text-gray-500">All rights reserved. </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { PhEnvelope, PhHouseSimple, PhInstagramLogo, PhPhone, PhTicket, PhTwitterLogo, PhWhatsappLogo, PhYoutubeLogo } from '@phosphor-icons/vue'
const { ticketUrl } = useAppConfig()
</script>