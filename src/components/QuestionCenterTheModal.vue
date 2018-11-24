<template>

    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>
        <template slot="question-modal">
            <div class="modal" :style="dynamicModalWidth">
                <h4>I really want to be centered!</h4>
            </div>
        </template>
    </question>

</template>


<script>
    import Question from './Question.vue';

    export default {
        name: 'QuestionCenterTheModal',

        title: 'Center the Modal',

        data() {
            return {
                description: "Center the modal both vertically and horizontally (with respect to the container). Note that the " +
                    "width of the modal is randomly generated -- you'll have to figure out a way for the modal to be centered " +
                    "regardless of its width",
                modalWidth: 500     // initial modal width
            };
        },

        methods: {

        },

        computed: {
            dynamicModalWidth() {
                return `width: ${this.modalWidth}px`;
            }
        },

        components: {
            Question
        },

        mounted() {

            // dynamically generate modal width between 200px-800px every 2.6s:
            setInterval(()=> {
                this.modalWidth = Math.floor((Math.random() * 600) + 200);
            }, 2600);
        }
    }
</script>


<style scoped>

</style>
