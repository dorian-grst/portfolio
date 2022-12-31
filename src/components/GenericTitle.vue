<template>
    <div class="title" :class="{'margin-for-second-line': !marginForSecondLine }">
        <div 
        v-for="(word, index) in words" 
        :key="index">
            <div>{{ word }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        words: Array,
        marginForSecondLine: {
            type: Boolean,
            default: true,
        }
    }
} 
</script>

<style lang="scss" scoped>
.title {
    display: flex;
    flex-direction: column;
    font-size: 8vw;
    padding-top: 65px;
    margin-left: 10%;
    padding-bottom: 65px;
    width: fit-content;
}

.title div:nth-child(2) {
    margin-left: 20%;
}

.margin-for-second-line div:nth-child(2){
    margin-left: 0;
}
</style>