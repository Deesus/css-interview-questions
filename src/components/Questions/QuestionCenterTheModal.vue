<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="modal" :style="dynamicModalDimensions">
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
                description:
                    "For this question, we would like to center the modal both vertically and horizontally, with respect to the viewport/screen " +
                    "(therefore, you can ignore the page header when calculating the vertical position). Note that the " +
                    "width and height of the modal is randomly generated -- you'll have to take into account the modal's dynamic dimensions to center it properly.",
                modalWidth: 500,    // initial modal width,
                modalHeight: 100,   // initial modal height
                thumbnailSrc: require('../../images/exercise_screenshots/center_modal.png')
            };
        },

        methods: {},

        computed: {
            dynamicModalDimensions() {
                return `width: ${this.modalWidth}px; height: ${this.modalHeight}px;`;
            }
        },

        mounted() {

            // every 2.5s dynamically generate modal width between 200px-800px and height between 100px-400px:
            setInterval(()=> {
                this.modalWidth = Math.floor((Math.random() * 600) + 200);
                this.modalHeight = Math.floor((Math.random() * 300) + 100);
            }, 2500);
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
