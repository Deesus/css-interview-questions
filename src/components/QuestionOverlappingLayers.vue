<template>
    <div class="question">
        <div class="panel-1">I should be above</div>
        <div class="panel-2">I should be below</div>
    </div>
</template>


<script>
    export default {
        name: 'QuestionOverlappingLayers'
    }
</script>


<style scoped>
    .question {
        position: relative;
        text-align: center;
    }

    .panel-1,
    .panel-2 {
        position: absolute;
        width: 300px;
        height: 200px;
        padding: 7px 0;
    }

    .panel-1 {
        margin-left: 100px;
        background: #efff7f;
    }

    .panel-2 {
        margin-left: 150px;
        margin-top: 50px;
        background: #cbeaff;
    }
</style>
