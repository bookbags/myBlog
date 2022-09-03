<template>
    <div class="Blog">
        <BlogTable v-for="item in blogList" :key="item.id" :blogInfo="item"></BlogTable>
        <SplitPage :allDataVolume="blogTotal" :currentIndex="currentIndex" :showIndexVolume="10" :pageShowVolume="limit" @click="changeCurrentIndex"></SplitPage>
    </div>
</template>

<script>
import {getAllBlog} from "@/api/blog.js";
import SplitPage from "@/components/splitPage";
import BlogTable from "./blogTable.vue";
export default {
    components:{
        SplitPage,
        BlogTable
    },
    data(){
        return {
            blogList:[],
            blogTotal:0,
            limit: 10,
            currentIndex: 1
        }
    },
    methods:{
        changeCurrentIndex(newIndex){
            this.currentIndex = newIndex;
            this.getData();
        },
        async getData(){
            const res = await getAllBlog({page:this.currentIndex, limit:this.limit});
            this.blogList = res.data.rows;
            this.blogTotal = res.data.total;
        }
    },
    async created(){
        this.getData();
    }
}
</script>

<style scoped lang="less">
    .Blog{
        width: 100%;
        height: 100%;
        overflow-y: auto;
        .SplitPage{
            margin-top: 2em;
        }
    }
</style>