<template>
    <div class="custom-cursor">
    </div>
</template>

<script>
  export default {
    mounted () {
        const cursor = document.querySelector('.custom-cursor');
        document.addEventListener('mousemove', e => {
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        })
    }
  };
</script>

<style land="scss" scoped>
.custom-cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    pointer-events: none;
    transition: 0.1s;
    transform : translate(-50%, -50%);
    mix-blend-mode: difference;
}
</style>