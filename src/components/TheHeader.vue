<template>
    <header>
        <router-link class="left" to='/'>
            <img class="logo" src="@/assets/logo.png" alt="logo">
            <span class="title">Portfolio</span>
        </router-link>
        <div class="right">
            <div class="container">
                <span class="language" v-for="abbreviation in abbreviations.slice(0, 1)" :key="abbreviation.id"
                    @click="changeLanguage">
                    {{ abbreviation.text }}
                </span>
                <a class="cv" :href="$t('cv')" target="_blank">
                    <span v-for="abbreviation in abbreviations.slice(1, 2)" :key="abbreviation.id">
                        {{ abbreviation.text }}
                    </span>
                    <img class="arrow" src="@/assets/arrow.svg">
                </a>
            </div>
            <div v-if="!isMobile()" class='dots'>
                <span class='dot'></span>
                <span class='dot'></span>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            abbreviations: [
                { id: 0, text: 'FR' },
                { id: 1, text: 'CV' }
            ],
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
        changeLanguage() {
            this.abbreviations[0].text = this.abbreviations[0].text === 'FR' ? 'EN' : 'FR';
            this.$i18n.locale = this.currentLocale === 'en' ? 'fr' : 'en';
            this.currentLocale = this.$i18n.locale;
        },
        handleResize() {
            this.windowWidth = window.innerWidth;
        },
        isMobile() {
            if (this.windowWidth <= 767) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    align-items: center;
    padding-top: 20px;
    padding-left: 65px;
    padding-right: 65px;

    .left {
        display: flex;
        align-items: center;
        text-decoration: none;

        .title {
            font-size: 25px;
            margin-left: 10px;
            color: black;
        }

        .logo {
            width: 40px;
        }
    }

    .right {
        margin-left: auto;
        display: flex;
        align-items: center;
        gap: 100px;

        .container {
            display: flex;
            gap: 100px;
            align-items: center;

            .cv {
                text-decoration: none;
                color: black;
                font-size: 25px;

            }
            .language {
                font-size: 25px;
                color: black;
                text-decoration: none;
            }
        }

        .dots {
            display: flex;
            gap: 15px;

            .dot {
                height: 20px;
                width: 20px;
                background-color: black;
                border-radius: 50%;
                display: inline-block;
            }
        }
    }
}

@media (max-width: 767px) {
    header {
        padding-left: 30px;
        padding-right: 30px;

        .right {
            gap: 50px;

            .container {
                gap: 50px;
            }
        }
    }
}

@media (max-width: 400px) {
    header {
        .left {

            .title {
                font-size: 12px;
            }

            .logo {
                width: 20px;
            }
        }

        .right {
            .container {
                .language {
                    font-size: 15px;
                }

                .cv {
                    font-size: 15px;
                }

                .cv {
                    .arrow {
                        width: 11px;
                    }
                }
            }
        }
    }
}
</style>