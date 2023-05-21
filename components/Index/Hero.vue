<template>
    <div>
        <section id="hero" class="relative grid p-4 overflow-hidden border-b-4 place-items-center border-gray-950">
            <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="10 10 80 80">
                <path class="fill-pink-500 out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
                <path class="fill-yellow-500 stroke-indigo-500 in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
                <path class="fill-indigo-500 out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
                <path class="fill-pink-500 stroke-yellow-500 in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
            </svg>
            <div class="container z-10 max-w-6xl py-16 mx-auto lg:py-24">
                <h1 class="mb-8 font-bold text-6xl sm:text-8xl xl:text-[108pt] xl:leading-[108pt] outline-4">Ramah Keberagaman & Ramah Anak</h1>
                <div class="inline-block px-6 py-3 text-2xl font-bold bg-white border-4 rounded-lg sm:rounded-full border-gray-950">Jakarta, <br class="sm:hidden" /> 9 s.d. 10 Juni 2023</div>
            </div>
        </section>
        <section id="about" class="p-4 border-b-4 border-gray-950">
            <div class="max-w-6xl py-16 mx-auto text-center lg:py-24">
                <h2 class="mb-6 text-5xl font-bold">Islami(c) Fest</h2>
                <p class="text-2xl">Ruang perjumpaan para pegiat media Islam, content creator, dan influencer yang fokus pada kampanye Islam ramah dan moderat di ruang digital</p>
            </div>
        </section>
    </div>
</template>


<style scoped>
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.out-top {
    animation: rotate 20s linear infinite;
    transform-origin: 13px 25px;
}

.in-top {
    animation: rotate 10s linear infinite;
    transform-origin: 13px 25px;
}

.out-bottom {
    animation: rotate 25s linear infinite;
    transform-origin: 84px 93px;
}

.in-bottom {
    animation: rotate 15s linear infinite;
    transform-origin: 84px 93px;
}
</style>