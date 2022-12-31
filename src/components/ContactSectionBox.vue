<template>
    <div class="contact-box">
        <div class="row">
            <contact-section-box-text :title="$t('informations.location')" information="Sète, FRANCE" />
            <contact-section-box-text :title="$t('informations.phone')" information="06 74 36 13 80" />
        </div>
        <div class="row">
            <contact-section-box-link :title="$t('informations.networks')" firstlink="https://github.com/dorian-grst"
                firsttext="github" secondlink="https://www.linkedin.com/in/dorian-grasset/" secondtext="linkedin" />
            <contact-section-box-text :title="$t('informations.mail')" information="dorian.grasset.contact@gmail.com" />
        </div>
    </div>
</template>

<script>
import ContactSectionBoxText from '@/components/ContactSectionBoxText.vue';
import ContactSectionBoxLink from '@/components/ContactSectionBoxLink.vue';
export default {
    components: {
        ContactSectionBoxText,
        ContactSectionBoxLink
    }
}
</script>

<style lang="scss" scoped>
.contact-box {
    display: flex;
    flex-direction: row;
    gap: 100px;

    .row {
        display: flex;
        flex-direction: column;
        gap: 50px;
    }
}

@media (max-width: 1070px) {
    .contact-box {
        gap: 50px;
    }
}

@media (max-width: 767px) {
    .contact-box {
        margin-left: 0;

        .row {
            gap: 25px;
        }
    }
}

@media (max-width: 667px) {
    .contact-box {
        flex-direction: column;
        gap: 20px;
    }

}
</style>