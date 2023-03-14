<template>
    <section class="project-aventuriers-du-rail">
        <generic-title :words="[$t('projects-aventuriers-du-rail.first'), $t('projects-aventuriers-du-rail.second')]"
            :marginForSecondLine="false" />
        <div class="horizontal-container">
            <img class="image" src="@/assets/picture/aventuriers_du_rail.png" />
            <div class="vertical-container">
                <span class="presentation">
                    <b> {{ $t('subject') }}</b>{{ $t('projects-aventuriers-du-rail.description') }}
                </span>
                <span>
                    <b> {{ $t('languages') }}</b> Java, JavaFX
                </span>
                <div class="links-container">
                    <b> {{ $t('links') }}</b>
                    <a class="link" href="https://github.com/dorian-grst/aventuriers_du_rail" target="_blank">
                        <span class="text">github</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                    <a class="link" href="aventuriers_du_rail1.pdf" target="_blank">
                        <span class="text"> phase1</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                    <a class="link" href="aventuriers_du_rail2.pdf" target="_blank">
                        <span class="text"> phase2</span>
                        <img class="arrow" src="@/assets/arrow.svg">
                    </a>
                    <a class="link" href="aventuriers_du_rail3.pdf" target="_blank">
                        <span class="text"> phase3</span>
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