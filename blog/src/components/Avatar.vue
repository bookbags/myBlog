<template>
  <img :src="src" class="Avatar" :style="{
    width: size + 'px',
    height: size + 'px'
  }">
</template>

<script>
export default {
    props:{
        src:{
            type: String,
            required: true
        },
        size:{
            type: Number,
            default: 50
        }
    }
}
</script>

<style scoped lang="less">
    .Avatar{
        display: block;
        border-radius: 50%;
    }
</style>