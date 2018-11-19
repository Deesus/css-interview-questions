<template>

    <div class="question">
        <div class="modal" :style="dynamicModalWidth">
            <h4>I really want to be centered!</h4>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'QuestionCenterTheModal',

        data() {
            return {
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
