<template>
    <div class="profile-section-presentation">
        <span class="presentation">
            {{ $t('presentation.left') }}
        </span>
        <span class="presentation">
            {{ $t('presentation.right') }}
        </span>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.profile-section-presentation {
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    gap: 60px;

    .presentation {
        font-size: 22px;
    }
}

@media (max-width: 767px) {
    .profile-section-presentation {
        flex-direction: column;
    }
}

@media (max-width: 400px) {
    .profile-section-presentation {
        gap: 30px;
        .presentation {
            font-size: 12px;
        }
    }
}
</style>
