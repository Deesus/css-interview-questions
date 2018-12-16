<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container"><!--
            --><span class="badge">Convolution kernel that is convolved with the layer input</span><!--
            --><span class="badge">AI accelerator application-specific integrated circuit</span><!--
            --><span class="badge">Framework to define and run computations involving tensors</span>
        </div>
    </question>
</template>


<script>
    import Question from '../../components/BaseQuestion.vue';
    import { CalendarIcon } from 'vue-feather-icons'
    const QUESTION_TITLE = 'Truncate Text';


    export default {
        name: 'QuestionTruncateText',

        title: 'Truncate Text',

        components: {
            Question,
            CalendarIcon
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "For the next challenge, we'd like to prevent text overflowing from our components. Keep the existing " +
                    "dimensions for the badges but truncate excess text with an ellipsis. Hint: consider how CSS handles " +
                    "text wrapping; you'll want the text to be in a single line in order to add ellipsis to truncated strings.",
                thumbnailSrc: require("../../images/exercise_screenshots/truncate_text.png")
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

    .badge {
        line-height: 1;
        width: 160px;
        height: 22px;
        display: block;
        margin: 10px auto;
        padding: 2px 4px;
        background: #6bff3d;
        border-radius: @border-radius-default;
        border: 1px solid darken(#6bff3d, 20%);
        color: #131212;
    }
</style>
