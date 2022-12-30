<template>
    <button v-if="!isMobile()" :class="{ 'side-arrow-right': pointingRight, 'side-arrow-left': !pointingRight }">
        <span>{{ text }}</span>
        <img v-if="pointingRight" src="@/assets/longrightarrow.svg" />
        <img v-else src="@/assets/longleftarrow.svg" />
    </button>
</template>

<script>
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.handleResize);
        })
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        isMobile() {
            if (this.windowWidth <= 767) {
                return true;
            }
            return false;
        }

    },
    props: {
        text: String,
        pointingRight: {
            type: Boolean,
            default: true
        }
    }
}

</script>

<style lang="scss" scoped>
button {
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 35px;
    position: absolute;
    bottom: 20%;

    span {
        font-size: 20px;
    }
}

.side-arrow-right {
    right: 3%;
}

.side-arrow-left {
    flex-direction: row-reverse;
    left: 3%;
}
</style>