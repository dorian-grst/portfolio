<template>
    <div>
        <span>
            {{ $t('presentation.left') }}
        </span>
        <span>
            {{ $t('presentation.right') }}
        </span>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
div {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    gap: 60px;

    span {
        font-size: 22px;
    }
}

@media (max-width: 767px) {
    div {
        flex-direction: column;
    }
}
</style>
