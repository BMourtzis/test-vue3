<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        {{testString}}
        <button @click="testReaction">+1</button>
        <p v-if="waiting">Loading</p>
        <p v-if="!waiting">Loaded</p>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testStringFunction from "@/composables/test.ts";
import loader from "@/composables/loader.ts";

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    mounted() {
        this.pushToAwaitQueue(new Promise(function (resolve) {
            setTimeout(resolve, 1000);
        })).then(() => {
            console.log("after first");
        });

        console.log("here");

        this.pushToAwaitQueue(new Promise(function (resolve) {
            setTimeout(resolve,3000);
        })).then(() => {
            console.log("after second");
        });
    },
    setup() {
        const {
            test,
            testString,
            testReaction
        } = testStringFunction(1);

        const {
            waiting,
            pushToAwaitQueue
        } = loader();

        return {
            test,
            testString,
            testReaction,
            waiting,
            pushToAwaitQueue
        };
    }
}
</script>
