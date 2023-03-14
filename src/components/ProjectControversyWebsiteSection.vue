<template>
    <section class="project-controversy-website">
        <generic-title class="title" :words="[$t('projects-controversy.first'), $t('projects-controversy.second')]"
            :marginForSecondLine="false" />
        <div class="horizontal-container">
            <img class="image" src="@/assets/picture/controversy-website.png" />
            <div class="vertical-container">
                <span class="presentation">
                    <b> {{ $t('subject') }}</b>{{ $t('projects-controversy.description') }}
                </span>
                <span>
                    <b> {{ $t('languages') }}</b> HTML, CSS
                </span>
                <div class="links-container">
                    <b> {{ $t('links') }}</b>
                    <a class="link" href="https://github.com/dorian-grst/controversy-site" target="_blank">
                        <span class="text">github</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                    <a class="link" href="controversy-website.pdf" target="_blank">
                        <span class="text"> {{ $t('rules') }}</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                </div>
            </div>
        </div>
        <generic-arrow :text="$t('arrow.projects')" :pointingRight="false" @click="goProject()" />
    </section>
</template>
<script>
import GenericTitle from '@/components/GenericTitle.vue';
import GenericArrow from '@/components/GenericArrow.vue';
export default {
    components: {
        GenericTitle,
        GenericArrow
    },
    methods: {
        goProject() {
            this.$router.push({ name: 'projects' });
        }
    }
}
</script>

<style lang="scss" scoped>
.title {
    font-size: 6vw;
}

.image {
    width: 25%;
    height: auto;
    object-fit: contain;
    border-radius: 3px;
}

.horizontal-container {
    display: flex;
    gap: 60px;
    margin-left: 10%;

    .vertical-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        font-size: 15px;
        margin-right: 10%;

        .links-container {
            display: flex;
            gap: 20px;

            .link {
                gap: 5px;
                text-decoration: none;
                color: black;
                .arrow {
                    width: 10px;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .image {
        width: 100%;
    }
    .horizontal-container {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;

    }
}
</style>