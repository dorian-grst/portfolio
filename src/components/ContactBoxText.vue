<template>
    <div class="contact-box-text">
        <span class="title">
            {{ title }}
        </span>
        <span class="text">
            {{ information }}
        </span>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        information: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-box-text {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .title {
        font-size: 1.5vw;
    }

    .text {
        font-size: 1.25vw;
    }
}

@media (max-width: 767px) {
    .contact-box-text {
        gap: 20px;

        .title {
            font-size: 30px;
        }

        .text {
            font-size: 22px;
        }
    }
}
</style>