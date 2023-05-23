<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const title = 'Islami(c) Fest 2023 - Ramah Keberagaman & Ramah Anak';
const description = 'Ruang perjumpaan para pegiat media Islam, content creator, dan influencer yang fokus pada kampanye Islam ramah dan moderat di ruang digital';

useHead({
    title,
    htmlAttrs: {
        lang: "id",
    }
});

useSeoMeta({
    title,
    ogTitle: title,
    description,
    ogDescription: description,
    ogImage: "/logo-pattern.jpg",
    twitterCard: 'summary_large_image',
})
</script>