<template>
    <section class="project-forum-application">
        <generic-title :words="[$t('projects-forum-application.first'), $t('projects-forum-application.second')]"
            :marginForSecondLine="false" />
        <div class="horizontal-container">
            <iframe class="video"
                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7037167715521818624?compact=1" height="220"
                width="360" frameborder="0" allowfullscreen="" title="Vidéo"></iframe>
            <div class="vertical-container">
                <span class="presentation">
                    <b> {{ $t('subject') }}</b>{{ $t('projects-forum-application.description') }}
                </span>
                <span>
                    <b> {{ $t('languages') }}</b> HTML, CSS, JavaScript, PHP, SQL
                </span>
                <div class="links-container">
                    <b> {{ $t('links') }}</b>
                    <a class="link" href="https://github.com/dorian-grst/forum-application" target="_blank">
                        <span class="text">github</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                    <a class="link" href="application.pdf" target="_blank">
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

.video {
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
    .video {
        width: 100%;
        height: 400px;
    }
    .horizontal-container {
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    }
}
</style>