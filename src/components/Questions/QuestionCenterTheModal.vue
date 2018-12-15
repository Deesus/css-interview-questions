<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="modal" :style="dynamicModalWidth">
            <h4>I really want to be centered!</h4>
        </div>
    </question>
</template>


<script>
    // TODO: n.b. this problem can be solved using flexboxes, so we need to revise it
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Center the Modal';


    export default {
        name: 'QuestionCenterTheModal',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Center the modal both vertically and horizontally (with respect to the container). Note that the " +
                    "width of the modal is randomly generated -- you'll have to figure out a way for the modal to be centered " +
                    "regardless of its width",
                modalWidth: 500,     // initial modal width,
                thumbnailSrc: require('../../images/exercise_screenshots/center_modal.png')
            };
        },

        methods: {},

        computed: {
            dynamicModalWidth() {
                return `width: ${this.modalWidth}px`;
            }
        },

        mounted() {

            // dynamically generate modal width between 200px-800px every 2.6s:
            setInterval(()=> {
                this.modalWidth = Math.floor((Math.random() * 600) + 200);
            }, 2600);
        },

        components: {
            Question
        }
    }
</script>


<style scoped lang="less">
    @import "../../styles/base/_constants";

    .modal {
        background: #f2f2f2;
        border: 1px solid @input-border-color;
        border-radius: 4px;
        padding: 6px 12px;
        text-align: center;
        height: 100px;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.25);
        z-index: 5;
        position: fixed;
    }

    /* n.b. the question container needs to be positioned to top since we want users to vertically center the modal */
    /* TODO: use a different class instead of overriding the question block: */
    .question.question--fullscreen {
        top: 0;
        margin-top: @section-header-width;
    }
</style>
