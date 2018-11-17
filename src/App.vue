<template>
    <div>
        <div class="page-controls">
            <span id="btn-example-1" class="btn" @click="showExample(1)">1</span>
            <span id="btn-example-2" class="btn" @click="showExample(2)">2</span>
            <span id="btn-example-3" class="btn" @click="showExample(3)">3</span>
            <span id="btn-example-4" class="btn" @click="showExample(4)">4</span>
        </div>



        <!--    ==================================================
                (1) - Vertically center all the items inside the row:
                ================================================== -->
        <div id="div-example-1" v-if="showExample1">
            <label><input type="text" placeholder="meow"></label>
            <div class="lots-of-text">
                Reiciendis earum sit aut quos dolor perspiciatis eos sunt.
                Illo distinctio voluptatem sint in odio necessitatibus qui nesciunt. Ipsa autem et laborum suscipit iure.
                Sunt quis tempora modi deleniti enim.
            </div>
            <button>okay</button>
            <input type="checkbox" checked="checked">
            <div class="empty-box"></div>
        </div>



        <!--    ==================================================
                (2) - Change all of the buttons (and only the buttons) to red.
                    - (Optional) Change all of the buttons only in the first 3 rows to red.
                ================================================== -->
        <div id="div-example-2" v-if="showExample2">
            <div class="row">
                <label><input placeholder="bye" type="text"></label>
                <label><input type="button" value="okay"></label>
                <label><input placeholder="hello" type="text"></label>
                <label><input placeholder="hi" type="text"></label>
            </div>
            <div class="row">
                <label><input type="button" value="cancel"></label>
                <label><input placeholder="foo" type="text"></label>
                <label><input placeholder="hello" type="text"></label>
                <label><input placeholder="bar" type="text"></label>
                <label><input placeholder="baz" type="text"></label>
            </div>
            <div class="row">
                <label><input placeholder="moo" type="text"></label>
                <label><input type="button" value="ok"></label>
                <label><input placeholder="oink" type="text"></label>
                <label><input placeholder="meow" type="text"></label>
                <label><input type="button" value="confirm"></label>
            </div>
            <div class="row">
                <label><input placeholder="yana" type="text"></label>
                <label><input placeholder="galina" type="text"></label>
                <label><input placeholder="alina" type="text"></label>
                <label><input type="button" value="warning"></label>
            </div>
        </div>



        <!--    ==================================================
                (3) - Center the modal both vertically and horizontally (with respect to the screen).
                    - Note: the modal has randomly generated widths.
                ================================================== -->
        <div id="div-example-3" class="modal" v-if="showExample3" :style="{width: dynamicWidth}">
            <h4>I really want to be centered!</h4>
        </div>



        <!--    ==================================================
                (4) - Fit both the images on a single row with a 40px margin between them
                    - Ensure their make equal widths
                    - The images should take up the entire width of the screen (minus the 40px gap between them)
                    - (Hint: you might need 2 selectors and some math.)
                ================================================== -->
        <div id="div-example-4" v-if="showExample4">
            <img class="image" src="./images/marble_palace.jpg"><img class="image" src="./images/nevski_street.jpg">
        </div>
    </div>
</template>


<script>
    export default {
        name: 'App',


        data() {
            return {
                showExample1: false,
                showExample2: false,
                showExample3: false,
                showExample4: false,
            };
        },


        methods: {
            showExample(exampleNumber) {
                switch (exampleNumber) {
                    case 1:
                        this.showExample1 = !this.showExample1;
                        this.showExample2 = this.showExample3 = this.showExample4 = false;
                        break;
                    case 2:
                        this.showExample2 = !this.showExample2;
                        this.showExample1 = this.showExample3 = this.showExample4 = false;
                        break;
                    case 3:
                        this.showExample3 = !this.showExample3;
                        this.showExample1 = this.showExample2 = this.showExample4 = false;
                        break;
                    case 4:
                        this.showExample4 = !this.showExample4;
                        this.showExample1 = this.showExample2 = this.showExample3 = false;
                        break;
                    default:
                        console.log('invalid case');
                        break;
                }
            }
        },


        computed: {
            dynamicWidth() {
                let randWidth = Math.floor((Math.random() * 600) + 200);
                return `${randWidth}px`;
            }
        }
    }
</script>


<style scoped>

</style>
