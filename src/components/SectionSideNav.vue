<template>

    <div class="side-nav">
        <div v-for="(item, index) in navLinks" :key="index">
            <!-- TODO: is there a way to easily reference the index in a computed property in order to abstract away the logic from the markup? -->
            <router-link :to="{name: item.routeName }">
                <div :class="{ 'side-nav__heading':        item.isNavHeading,
                               'side-nav__item':           !item.isNavHeading,
                               'side-nav__item--selected': (index === selectedQuestionIndex && !item.isNavHeading) }"
                     @click="linkClicked(index, item.title)"
                >
                    {{ item.title }}
                </div>
            </router-link>
        </div>
    </div>

</template>


<script>
    import { SELECT_NAV_LINK_INDEX_MUTATION,
             SELECT_NAV_LINK_TITLE_MUTATION } from '../store/mutationTypes';


    export default {
        name: 'LayoutSideNav',

        data() {
            return { };
        },

        methods: {
            linkClicked(index, questionTitle) {
                this.$store.commit(SELECT_NAV_LINK_INDEX_MUTATION, index);
                this.$store.commit(SELECT_NAV_LINK_TITLE_MUTATION, questionTitle);
            }
        },

        computed: {
            navLinks() {
                return this.$store.state.navLinks;
            },

            selectedQuestionIndex() {
                return this.$store.state.selectedQuestionIndex;
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";


    .side-nav {
        width: @section-side-nav-width;
        font-size: @font-size-small;
        grid-column: ~"1/2";
        grid-row: ~"2/3";
        padding: @section-v-padding @section-h-padding;
        height: 100%;
        overflow-y: auto;
        background: @bg-color;
        border-right: @section-border;
        text-align: right;

        &__heading {
            color: @font-color-default;
            padding-top: 12px;
            padding-bottom: 12px;
            text-transform: uppercase;
            cursor: pointer;
        }

        &__item {
            padding: 4px 0;
            cursor: pointer;
            color: @font-color-muted;

            &:hover {
                color: @font-color-default;
            }

            &&--selected {
                color: @font-color-blue;
            }
        }
    }
</style>
