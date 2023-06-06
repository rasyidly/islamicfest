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
                        <a class="block px-6 py-6 transition whitespace-nowrap hover:text-indigo-500" href="#gallery">Galeri</a>
                    </li>
                    <!-- <li>
                        <div class="block px-6 py-6 text-gray-400 transition cursor-not-allowed whitespace-nowrap">Testimoni</div>
                    </li> -->
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
                        <a class="flex px-6 py-6 space-x-2 transition bg-transparent rounded-none text-gray-950 whitespace-nowrap hover:bg-pink-500 hover:text-white" href="#faqs">
                            <PhQuestion :size="24" />
                            <span class="hidden lg:inline">FAQ</span>
                        </a>
                    </li>
                    <li>
                        <a class="flex px-6 py-6 space-x-2 text-white transition whitespace-nowrap bg-gray-950 hover:bg-indigo-500" :href="ticketUrl" target="_blank">
                            <PhTicket :size="24" />
                            <span class="hidden lg:inline">Get Ticket</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <div class="p-8 text-white bg-gray-900">
            <div class="container mx-auto mb-8">
                <h2 class="mb-8 text-xl font-bold text-center text-gray-400 lg:text-2xl">In collaboration with</h2>
                <div class="flex flex-wrap items-center justify-center gap-8">
                    <a href="https://islami.co" target="_blank"><img class="h-8 lg:my-1.5 aspect-auto" src="/images/islami.svg" alt=""></a>
                    <a href="https://www.kemenag.go.id/" target="_blank"><img class="aspect-auto max-h-12" src="/images/kemenag.png" alt=""></a>
                    <a href="https://www.kemdikbud.go.id/" target="_blank"><img class="aspect-auto max-h-12" src="/images/kemdikbud.png" alt=""></a>
                    <a href="https://kitabisa.com/" target="_blank"><img class="aspect-auto max-h-12" src="/images/kitabisa.png" alt=""></a>
                    <a href="https://www.unicef.org/" target="_blank"><img class="aspect-auto max-h-12" src="/images/unicef.png" alt=""></a>
                    <a href="https://cariustadz.id/" target="_blank"><img class="aspect-auto max-h-6" src="/images/cariustadz.png" alt=""></a>
                    <a href="https://www.instagram.com/jedanulisstore/" target="_blank"><img class="aspect-auto max-h-12" src="/images/jedanulis.png" alt=""></a>
                    <a href="https://elbukhariinstitute.or.id/" target="_blank"><img class="aspect-auto max-h-12" src="/images/elbukhari.png" alt=""></a>
                    <a href="https://www.instagram.com/komujijakarta/?hl=id" target="_blank"><img class="aspect-auto max-h-12" src="/images/komuji.png" alt=""></a>
                </div>
            </div>
        </div>
        <footer class="p-8 text-white bg-gray-950 lg:p-20">
            <div class="container flex flex-col gap-20 mx-auto xl:flex-row lg:justify-between">
                <div>
                    <h5 class="mb-4 text-xl font-bold text-gray-300">Partners</h5>
                    <div class="flex flex-wrap items-center max-w-4xl gap-4">
                        <a href="https://www.vice.com/id/topic/indonesia" target="_blank"><img class="aspect-auto max-h-8" src="/images/vice-indo.png" alt=""></a>
                        <a href="https://www.nu.or.id/" target="_blank"><img class="aspect-auto max-h-6 " src="/images/nuonline.png" alt=""></a>
                        <a href="https://ibtimes.id/" target="_blank"><img class="aspect-auto max-h-8" src="/images/ibtimes.png" alt=""></a>
                        <a href="https://bincangsyariah.com/" target="_blank"><img class="aspect-auto max-h-12" src="/images/bincangsyariah.png" alt=""></a>
                        <!-- <a href="https://tvnu.id/" target="_blank"><img class="aspect-auto max-h-12" src="/images/tvnu.png" alt=""></a> -->
                        <a href="https://ikhbar.com/" target="_blank"><img class="aspect-auto max-h-12" src="/images/ikhbar.png" alt=""></a>
                        <a href="https://iqra.id/" target="_blank"><img class="aspect-auto max-h-8" src="/images/iqra.png" alt=""></a>
                        <a href="https://funislam.com/" target="_blank"><img class="aspect-auto max-h-8" src="/images/funislam.png" alt=""></a>
                        <a href="https://nucash.asia/" target="_blank"><img class="aspect-auto max-h-8" src="/images/nucash.svg" alt=""></a>
                        <a href="https://alif.id/" target="_blank"><img class="aspect-auto max-h-6" src="/images/alif-id.png" alt=""></a>
                        <!-- <a href="https://www.bbc.com/indonesia" target="_blank"><img class="aspect-auto max-h-6" src="/images/bbc.png" alt=""></a> -->
                        <a href="https://gusdurian.net/" target="_blank"><img class="aspect-auto max-h-6" src="/images/gusdurian.png" alt=""></a>
                        <a href="https://arrahim.id/" target="_blank"><img class="aspect-auto max-h-8" src="/images/arrahim.png" alt=""></a>
                        <a href="https://suara.com/" target="_blank"><img class="aspect-auto max-h-4" src="/images/suara.png" alt=""></a>
                        <!-- <a href="https://bincangmuslimah.com/" target="_blank"><img class="aspect-auto max-h-12" src="/images/bincang-muslimah.png" alt=""></a> -->
                        <!-- <a href="https://www.detik.com/" target="_blank"><img class="aspect-auto max-h-6" src="/images/detik.png" alt=""></a> -->
                        <a href="https://islamsantun.org/" target="_blank"><img class="aspect-auto max-h-8" src="/images/islamsantun.png" alt=""></a>
                        <a href="https://kompas.tv/" target="_blank"><img class="aspect-auto max-h-6" src="/images/kompastv.svg" alt=""></a>
                        <a href="https://neswa.id/" target="_blank"><img class="aspect-auto max-h-5" src="/images/neswa.png" alt=""></a>
                        <a href="https://www.instagram.com/cahpondok/" target="_blank"><img class="aspect-auto max-h-12" src="/images/cahpondok.png" alt=""></a>
                        <a href="https://www.dream.co.id/" target="_blank"><img class="aspect-auto max-h-9" src="/images/dream-muslim.png" alt=""></a>
                        <a href="https://www.instagram.com/lensapesantrenbabakan/" target="_blank"><img class="aspect-auto max-h-11" src="/images/lensapes.png" alt=""></a>
                        <a href="https://www.youtube.com/channel/UCUPnishwgouTMsXcGQqJyQA" target="_blank"><img class="aspect-auto max-h-12" src="/images/sinnar-sharia.png" alt=""></a>
                        <a href="https://www.youtube.com/@SuluhAgama" target="_blank"><img class="aspect-auto max-h-12" src="/images/suluh-agama.png" alt=""></a>
                        <a href="https://aisnusantara.or.id/" target="_blank"><img class="aspect-auto max-h-12" src="/images/aisnu.png" alt=""></a>
                        <!-- <a href="https://www.republika.co.id/" target="_blank"><img class="aspect-auto max-h-5" src="/images/republika.webp" alt=""></a> -->
                        <!-- <a href="https://santrigayengnusantara.co/" target="_blank"><img class="aspect-auto max-h-16" src="/images/santrigayeng.png" alt=""></a> -->
                        <!-- <a href="https://tafsiralquran.id/" target="_blank"><img class="aspect-auto max-h-16" src="/images/tafsir-quran.png" alt=""></a> -->
                        <!-- <a href="https://www.thejakartapost.com/" target="_blank"><img class="aspect-auto max-h-6" src="/images/thejakartapost.png" alt=""></a> -->
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
import { PhChatText, PhEnvelope, PhHouseSimple, PhInstagramLogo, PhPhone, PhQuestion, PhTicket, PhTwitterLogo, PhWhatsappLogo, PhYoutubeLogo } from '@phosphor-icons/vue'
const { ticketUrl } = useAppConfig()

onMounted(() => {
    var Tawk_API = 'd65f14f792c7aee3f07fd3d725c73ab0d00d548f' || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/6478abb0ad80445890f0762b/1h1rltap0';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();
})
</script>