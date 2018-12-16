<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">

        <div class="container">
            <span>Select Time:</span>
            <div class="dropdown">
                <select class="dropdown__select">
                    <option value="29-11-2018">Thursday, November Twenty Nine, 2018</option>
                    <option value="22-02-2017">Wednesday, February Twenty Two, 2017</option>
                    <option value="13-10-2017">Friday, October Thirteen, 2017</option>
                    <option value="27-09-2018">Thursday, September Twenty Seven, 2018</option>
                </select>

                <clock-icon class="dropdown__icon"></clock-icon>
            </div> <!-- /.dropdown -->

        </div> <!-- /.container -->
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    import { ClockIcon } from 'vue-feather-icons'
    const QUESTION_TITLE = 'Click Pass Through';


    export default {
        name: 'QuestionClickPassThrough',

        title: QUESTION_TITLE,

        components: {
            Question,
            ClockIcon
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "We've added an icon for our date-time picker component, but there's a problem: the icon is blocking us from clicking on the dropdown. " +
                    "Add some CSS properties to our component so that our mouse clicks pass through the icon.",
                thumbnailSrc: require("../../images/exercise_screenshots/click_pass_through.png")
            };
        }
    }
</script>


<style scoped lang="less">
    @import "../../styles/base/_constants";
    @import (reference) "../../styles/utils/_utils";


    .container {
        &:extend(.mixin-container, .flex-row);
        justify-content: center;
    }

    .dropdown {
        @drop-down-size: 2rem;

        margin-top: 1px;
        margin-left: 8px;
        display: block;
        position: relative;
        width: @drop-down-size;
        height: @drop-down-size;
        border: 1px solid rgb(5, 5, 5);
        border-radius: @border-radius-default;
        background: white;
        text-align: left;
        overflow: hidden;


        &__select {
            padding-left: @drop-down-size;
            background: none;
            position: absolute;
            width: 100%;
            height: 100%;
            border: 0;
            z-index: 0;
        }

        &__icon {
            width: @drop-down-size - 0.2;
            height: auto;
            z-index: 2;
            position: absolute;
            left: 0.05rem;
            top: 0;
        }
    }
</style>
