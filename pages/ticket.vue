<template></template>

<script setup>
const { ticketUrl } = useAppConfig()

await navigateTo(ticketUrl, {
    external: true
})
</script>