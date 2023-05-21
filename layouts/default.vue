<template>
    <div>
        <div class="border-b-4 border-gray-950">
            <div class="container max-w-6xl p-4 mx-auto">
                <div class="flex items-center justify-center">
                    <LogoIslamicFest class="max-h-24 aspect-auto" />
                    <div class="text-[12vw] font-bold sm:text-6xl md:text-8xl 2xl:text-9xl">fest</div>
                </div>
            </div>
        </div>
        <header class="sticky top-0 z-20 flex justify-between border-b-4 divide-x-4 bg-white/90 backdrop-blur-sm border-gray-950 divide-gray-950">
            <nav class="overflow-x-auto">
                <ul class="flex justify-start">
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#schedule">Pelaksanaan</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-talk">Toughtful Talk</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-music">Music</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-dakwahtainment">Dakwahtainment</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#speakers-comedy">Comedy</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#goal">Goals</a>
                    </li>
                    <li>
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#timeline">Timeline</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul class="flex justify-start divide-x-4 divide-gray-950">
                    <li>
                        <NuxtLink class="block px-6 py-6 transition whitespace-nowrap hover:bg-pink-500 hover:text-white">
                            <span class="hidden lg:inline">Contact Us</span>
                            <span class="inline lg:hidden">
                                <PhPhone :size="24" />
                            </span>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="block px-6 py-6 text-white transition whitespace-nowrap bg-gray-950 hover:bg-indigo-500">
                            <span class="hidden lg:inline">Buy Ticket</span>
                            <span class="inline lg:hidden">
                                <PhTicket :size="24" />
                            </span>
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer class=" bg-gray-950 text-white p-8 lg:p-20">
            <div class="container mx-auto flex flex-col xl:flex-row lg:justify-between gap-20">
                <div>
                    <h5 class="text-xl text-gray-300 font-bold mb-4">Pelaksana</h5>
                    <div class="flex flex-wrap items-center gap-8">
                        <img class="aspect-auto max-h-10" src="/images/kemenag.png" alt="">
                        <img class="aspect-auto max-h-8" src="/images/unicef.png" alt="">
                        <img class="aspect-auto max-h-8" src="/images/islami.svg" alt="">
                    </div>
                </div>
                <div>
                    <h5 class="text-xl text-gray-300 font-bold mb-4">Hubungi kami</h5>
                    <div class="text-gray-400 mb-1 flex items-start md:items-center space-x-2">
                        <div class="pt-1 md:pt-0">
                            <PhHouseSimple />
                        </div>
                        <div>Apartement City Light, Jl. Ir H. Juanda, Cemp. Putih, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412</div>
                    </div>
                    <a class="text-indigo-500 mb-1 flex items-start md:items-center space-x-2" href="mailto:yayasan.islamidotco@gmail.com" target="_blank">
                        <div class="pt-1 md:pt-0">
                            <PhEnvelope />
                        </div>
                        <div>yayasan.islamidotco@gmail.com</div>
                    </a>
                    <div class="text-gray-400">&copy; 2023 </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { PhEnvelope, PhHouseSimple, PhPhone, PhTicket } from '@phosphor-icons/vue'
</script>