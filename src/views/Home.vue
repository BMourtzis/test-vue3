<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        {{testString}}
        <button @click="testReaction">+1</button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import testStringFunction from "@/composables/test.ts";

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    setup() {
        const {
            test,
            testString,
            testReaction
        } = testStringFunction(1);

        return {
            test,
            testString,
            testReaction
        };
    }
}
</script>
