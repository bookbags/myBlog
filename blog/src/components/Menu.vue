<template>
    <ul class="Menu" v-if="list">
        <li v-for="(item, index) in list" :key="index">
            <a :href="'#'+item.id">{{item.name}}</a>
        </li>
    </ul>
</template>

<script>
export default {
    props:{
        list:{
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped lang="less">
    @import "~@/style/color.less";
    .Menu{
        background: #0d1117;
        height: 100%;
        color:@lightWords;
        li{
            list-style: none;
            padding: 0.5em;
        }
    }
</style>