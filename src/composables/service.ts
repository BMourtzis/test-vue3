import { ref, computed, Ref } from "vue";

let number: Ref<number> = ref(0);

export default function getService() {
    const plusOne = () => {
        number.value += 1;
    };

    const getNumber = computed(() => {
        return number.value;
    });

    return {
        plusOne,
        getNumber
    }
}