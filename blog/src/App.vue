<template>
    <Layout>
        <template #left>
            <Aside></Aside>
        </template>
        <template #middle>
            <router-view></router-view>
        </template>
    </Layout>
</template>

<script>
    import Aside from "@/components/Aside"
    import Layout from "@/components/Layout";
    export default {
        components: {
            Layout,
            Aside
        }
    }
</script>

<style></style>
