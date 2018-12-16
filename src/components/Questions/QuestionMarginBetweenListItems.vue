<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container">
            <div class="list">
                <div class="list-item">apple</div>
                <div class="list-item">orange</div>
                <div class="list-item">banana</div>
                <div class="list-item">cherry</div>
                <div class="list-item">jackfruit</div>
            </div>
        </div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Margin Between List Items';


    export default {
        name: 'QuestionMarginBetweenListItems',

        title: QUESTION_TITLE,

        components: {
            Question
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "This set of list items is styled, but there's no spacing between the items. " +
                    "Add 15px margin BETWEEN each list item -- there should be no space between the first item and the top " +
                    "of the list and no space between the last item and the bottom of the list.",
                thumbnailSrc: require('../../images/exercise_screenshots/margin_between_li.png')
            };
        }
    }
</script>


<style scoped lang="less">
    @import "../../styles/base/_constants";
    @import (reference) "../../styles/utils/_utils";


    .container {
        &:extend(.mixin-container);
    }

    .list {
        @list-bg-color: rgba(82, 92, 101, 0.1);

        border: 1px solid darken( @list-bg-color, 20%);
        border-radius: @border-radius-default;
        background:  @list-bg-color;
        width: 250px;
        height: auto;
        margin: auto;
    }

    .list-item {
        background: white;
        border-radius: @border-radius-default;
        height: 40px;
        padding: 8px 16px;
        box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);
    }
</style>
