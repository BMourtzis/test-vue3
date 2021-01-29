<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        {{getNumber}}
        <button @click="plusOne">+1</button>
        <p v-if="waiting">Loading</p>
        <p v-if="!waiting">Loaded</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from '@/components/HelloWorld.vue'
import testStringFunction from "@/composables/test.ts";
import loader from "@/composables/loader.ts";
import service from "@/composables/service.ts";

export default defineComponent({
    name: 'Home',
    components: {
        HelloWorld
    },
    mounted() {
        this.pushToAwaitQueue(new Promise( resolve => {
            setTimeout(resolve, 1000);
        })).then(() => {
            console.log("after first");
        });

        console.log("here");

        this.pushToAwaitQueue(new Promise(resolve => {
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

        const {
            plusOne,
            getNumber
        } = service();

        return {
            test,
            testString,
            testReaction,
            waiting,
            pushToAwaitQueue,
            plusOne,
            getNumber
        };
    }
});
</script>
