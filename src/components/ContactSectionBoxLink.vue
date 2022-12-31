<template>
    <div class="contact-box-link">
        <span class="title">
            {{ title }}
        </span>
        <div class="links">
            <a class="link" :href="firstlink" target="_blank">
                <span class="text"> {{ firsttext }}</span>
                <img class="arrow" src="@/assets/arrow.svg">
            </a>
            <a class="link" :href="secondlink" target="_blank">
                <span class="text">{{ secondtext }}</span>
                <img class="arrow" src="@/assets/arrow.svg">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        firstlink: {
            type: String,
            required: true
        },
        firsttext: {
            type: String,
            required: true
        },
        secondlink: {
            type: String,
            required: true
        },
        secondtext: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.contact-box-link {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .title {
        font-size: 1.5vw;
    }

    .links {
        display: flex;
        gap: 50px;

        .link {
            display: flex;
            gap: 5px;
            text-decoration: none;
            color: black;

            .text {
                font-size: 1.25vw;
            }

            .arrow {
                width: 12px;
            }
        }
    }
}

@media (max-width: 1070px) {
    .contact-box-link {
        .links {
            gap: 25px;
        }
    }
}

@media (max-width: 767px) {
    .contact-box-link {
        gap: 20px;

        .title {
            font-size: 30px;
        }

        .links {
            .link {

                .text {
                    font-size: 22px;
                }
            }
        }
    }
}

@media (max-width: 400px){
    .contact-box-link {
        .title {
            font-size: 20px;
        }
        .links {
            .link {
                .text {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>