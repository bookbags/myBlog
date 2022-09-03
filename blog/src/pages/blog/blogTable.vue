<template>
  <div class="BlogTable" @click="jumpDetails">
    <h3>{{blogInfo.title}}</h3>
   <img :src="blogInfo.thumb" v-if="blogInfo.thumb">
   <p>{{blogInfo.description}}</p>
  </div>
</template>

<script>
export default {
    props:{
        blogInfo:{
            type: Object,
            required: true
        }
    },
    methods:{
      jumpDetails(){
        this.$router.push(`/blog/${this.blogInfo._id}`)
      }
    }
}
</script>

<style scoped lang="less">
@import "~@/style/color.less";
  .BlogTable{
    overflow: hidden;
    box-sizing: border-box;
    padding: 1em;
    &:hover{
      box-shadow: 1px 1px 8px 4px @dark;
    }
    h3{
      text-align: center;
    }
    img{
      float: left;
    }
    p{
      text-indent: 2em;
    }
  }
</style>