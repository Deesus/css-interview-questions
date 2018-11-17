<template>
    <div>
        <layout-side-nav></layout-side-nav>
    </div>
</template>


<script>
    import LayoutSideNav from './components/LayoutSideNav.vue';

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
        },

        components: {
            'layout-side-nav': LayoutSideNav
        }
    }
</script>


<style scoped>

</style>
