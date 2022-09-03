<template>
  <div class="Layout">
    <div class="left">
        <slot name="left"></slot>
    </div>
    <div class="middle">
        <slot name="middle"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .Layout{
        display: flex;
        flex-wrap: nowrap;
        height: 100%;
        width: 100%;
        overflow: hidden;
        .left, .right, .middle{
            height: 100%;
        }
        .left{
            flex: 0 0 auto;
        }
        .right{
            flex: 0 0 auto;
        }
        .middle{
            width: 100%;
            flex: 1 1 auto;
        }
    }
</style>