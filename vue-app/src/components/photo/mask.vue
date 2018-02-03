<template id="mask">
      <div class="mask">
          <div class="display-img">
            <slot name="img"></slot>
          </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mask{
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
}
.display-img{
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
}
</style>
