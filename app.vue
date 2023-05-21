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
    },
    meta: [
        { name: "description", content: description },
        { name: "og:title", content: title },
        { name: "og:site_name", content: "Islami(c) Fest" },
        { name: "og:url", content: 'https://islamicfest.ngecek.my.id' },
        { name: "og:description", content: description },
        { name: "og:type", content: "website" },
        { name: "og:image", content: "/logo-pattern.jpg" },
    ],
});
</script>