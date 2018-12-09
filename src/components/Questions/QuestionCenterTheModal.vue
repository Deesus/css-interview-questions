<template>
    <question :description="description" :title="title">
        <div class="modal" :style="dynamicModalWidth">
            <h4>I really want to be centered!</h4>
        </div>
    </question>
</template>


<script>
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
                modalWidth: 500     // initial modal width,
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


<style scoped>

</style>
