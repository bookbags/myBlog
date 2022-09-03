<template>
    <Layout class="blogDetail">
        <template #middle>
            <div v-html="blogInfo.htmlContent" class="markdown-body"></div>
        </template>
        <template #right>
            <Menu :list="blogInfo.menu"></Menu>
        </template>
    </Layout>
</template>

<script>
    import {getBlogDetail} from "@/api/blog.js";
    import Layout from "@/components/Layout";
    import Menu from "@/components/Menu"
    export default {
        components: {
            Layout,
            Menu
        },
        data() {
            return {blogInfo: {menu:[]}}
        },
        async created() {
            this.blogInfo = (await getBlogDetail(this.$route.params.id)).data;
            console.log(this.blogInfo);
        }
    }
</script>

<style scoped="scoped" lang="less">
    @import "./github-markdown-css/github-markdown.css";
    .BlogDetail {
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
    .markdown-body{
        width: 100%;
        height: 100%;
        overflow-y: auto;
    }
</style>