<template>
    <div class="c-header">
        {{ headerText }}
        <i v-if="shouldShowQuestionMarkup" class="c-header__close-icon" @click.stop="hideQuestionMarkup">✕</i>
    </div>
</template>


<script>
    export default {
        name: 'SectionHeader',


        data() {
            return {};
        },


        methods: {
            hideQuestionMarkup() {
                this.$store.commit('showQuestionMarkup', false);
            }
        },


        computed: {
            headerText() {
                if (this.$store.state.shouldShowQuestionMarkup === true) {
                    return this.$store.state.selectedQuestionTitle;
                }
                else {
                    return "Interactive CSS Interview Questions";
                }
            },

            shouldShowQuestionMarkup() {
                return this.$store.state.shouldShowQuestionMarkup;
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";


    .c-header {
        grid-row: ~"1/2";
        grid-column: ~"1/5";
        z-index: 140;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        background: white;
        width: 100%;
        height: 62px;
        padding: 16px 32px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        position: relative;
        font-size: @font-size-large;

        &__close-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 25px;
            font-size: 2.4rem;
            line-height: 1;
            cursor: pointer;
            color: @font-color-muted;

            &:hover {
                color: @font-color-bold;
            }
        }
    }
</style>
