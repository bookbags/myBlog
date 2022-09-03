<template>
    <div class="Aside" v-if="isLoad===true">
        <header>
            <Avatar :size="80" :src="avatar"></Avatar>
            <h3>{{githubName}}</h3>
        </header>
        <ul>
            <li v-for="item in list" :key="item.path">
                <router-link :to="{name: item.name}">{{item.name}}</router-link>
            </li>
        </ul>
    </div>

</template>

<script>
    import Avatar from "@/components/Avatar";
    import {mapState} from "vuex";
    import link from "@/router/routes.js";
    export default {
        components: {
            Avatar
        },
        computed: {
            ...mapState("globalSet", {
                avatar: state => state.gData.avatar,
                githubName: state => state.gData.githubName,
                isLoad: state => state.isLoad
            }),
            //顺序由路由决定
            list: {
                set() {},
                get() {
                    return link.slice(1, -1).filter(item=>!item.noMenu);
                }
            }
        },
        mounted() {
            console.log(this.$store);
        }
    }
</script>

<style scoped="scoped" lang="less">
    @import "~@/style/color.less";
    .Aside {
        background-color: @dark;
        height: 100%;
        color: @lightWords;
        header {
            padding: 2em 2em 0;
            .Avatar {
                margin: 0 auto;
            }
            h3{
                text-align: center;
            }
        }
        ul{
            margin-top: 10em;
            li{
                font-size: 1.5em;
                padding-left: 1em;
                &:not(:first-of-type){
                    margin-top: 1em;
                }
            }
        }
    }
</style>