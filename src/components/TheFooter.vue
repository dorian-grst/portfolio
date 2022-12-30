<template>
    <footer>
        <div class="years" v-for="year in years" :key="year.id">
            <span>{{ year.value }}</span>
        </div>
        <div>&nbsp;</div>
        <span>
            | {{ name }}
        </span>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            name: 'Dorian Grasset',
            years: [
                { id: 0, value: '2022' },
                { id: 1, value: '-' },
                { id: 2, value: '2023' },
            ],
        }
    }
} 
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: row;
    position: absolute;
    bottom: 5%;
    padding-left: 65px;

    .years {
        display: inline-block;
        margin-left: 5px;
    }

}

@media (max-width: 767px) {
    footer {
        padding-left: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: static;
    }
}
</style>