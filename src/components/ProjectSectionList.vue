<template>
    <ul class="project-list">
        <li class="projects" v-for="project in projects" :key="project.name">
            <a class="project" @click="goTo(project)">
                <span class="name">{{ $t(project.name) }}</span>
                <img class="arrow" src="../assets/arrow.svg">
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                { id: 0, name: "projects.first",path: "controversy-website",link: 'https://github.com/dorian-grst/controversy-site' },
                { id: 1, name: "projects.second",path: "aventuriers-du-rail", link: 'https://github.com/dorian-grst/aventuriers_du_rail' },
                { id: 2, name: "projects.third", path: "scrabble", link: 'https://github.com/dorian-grst/scrabble' },
                { id: 3, name: "projects.fourth", path: "miraculum", link: 'https://github.com/dorian-grst/code-game-jam-2022' },
                { id: 4, name: "projects.fifth", path: "forum-application" ,link: 'https://github.com/dorian-grst/forum-application'}
            ]
        }
    },
    methods: {
        goTo(project) {
            this.$router.push(project.path);         
        }
    },
}
</script>
<style lang="scss" scoped>
.project-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 10%;
    margin-right: 10%;
    .projects {
        .project {
            display: flex;
            color: #787878;
            text-decoration: none;
            flex-wrap: wrap;
            align-items: center;
            gap: 10px;

            .name {
                font-size: 40px;
                color: #787878;
            }

            .name:hover {
                font-size: 45px;
                color: black;
            }

            .arrow {
                width: 30px;
            }
        }
    }
}

@media (max-width: 1070px) {
    .project-list {
        .projects {
            .project {
                .name {
                    font-size: 35px;
                }

                .name:hover {
                    font-size: 40px;
                }

                .arrow {
                    width: 25px;
                }
            }
        }
    }
}

@media (max-width: 767px) {
    .project-list {
        .projects {
            .project {
                .name {
                    color: black;
                }

                .arrow:hover {
                    color: white;
                }
            }
        }
    }
}

@media (max-width: 400px) {
    .project-list {
        .projects {
            .project {
                .name {
                    font-size: 20px;
                }

                .name:hover {
                    font-size: 25px;
                }

                .arrow {
                    width: 15px;
                }
            }
        }
    }
}
</style>