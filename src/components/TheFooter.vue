<template>
    <footer class="the-footer">
        <div class="years">
            <span class="year">{{ currentYear }} - {{ afterYear }}</span>
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
            currentYear: new Date().getFullYear(),
            afterYear: new Date().getFullYear() + 1,
        }
    }
} 
</script>

<style lang="scss" scoped>
.the-footer {
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
    .the-footer {
        padding-left: 30px;
        padding-top: 20px;
        padding-bottom: 20px;
        position: static;
    }
}

@media (max-width: 400px) {
    .the-footer {
        font-size : 12px;
    }
}
    
</style>