import { ref, computed } from "vue";

export default function getTestString(num: Number) {
    let test = ref(num);
    const testString = computed(() => {
        return "Test " + test.value;
    });

    const testReaction = () => {
        test.value = test.value.valueOf() + 1;
    }

    return {
        test,
        testString,
        testReaction
    };
}