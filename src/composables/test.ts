import { ref, computed, Ref } from "vue";

export default function getTestString(num: number) {
    let test: Ref<number> = ref(num);
    const testString = computed(() => {
        return "Test " + test.value;
    });

    const testReaction = () => {
        test.value += 1;
    }

    return {
        test,
        testString,
        testReaction
    };
}