<template>
    <div>
        <IndexHero />
        <IndexCalendar />
        <IndexSpeakers />
        <IndexMedia />
        <IndexFeature />
        <IndexGoal />
        <IndexTimeline />
        <IndexGallery />
        <IndexFAQ />
        <LazyClientOnly>
            <HeadlessTransitionRoot appear :show="modal" as="template">
                <HeadlessDialog as="div" @close="modal = false" class="relative z-50">
                    <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                    </HeadlessTransitionChild>
                    <div class="fixed inset-0 overflow-y-auto">
                        <div class="flex items-center justify-center min-h-full p-4 text-center">
                            <HeadlessTransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
                                <HeadlessDialogPanel class="relative w-full max-w-lg overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl 2xl:max-w-xl rounded-2xl">
                                    <a href="https://festival.islami.co/kaos"><img src="/poster1.jpg" alt=""></a>
                                    <button type="button" class="absolute grid w-12 h-12 p-0 text-2xl bg-pink-500 rounded-full top-6 right-6 place-items-center" @click="modal = false">&times;</button>
                                </HeadlessDialogPanel>
                            </HeadlessTransitionChild>
                        </div>
                    </div>
                </HeadlessDialog>
            </HeadlessTransitionRoot>
        </LazyClientOnly>
    </div>
</template>

<script setup>
const modal = ref(true)
</script>