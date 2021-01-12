import { ref, computed, Ref } from "vue";

// let promiseQueue: Ref<Array<Promise<any>>> = ref([]);
let promise: Ref<Promise<any>> = ref(new Promise(() => true));
let awaiting: Ref<Boolean> = ref(false);

export default function getQueuer() {
    const waiting = computed(() => {
        return awaiting;
    });

    const getQueue = () => {

    }

    const insertToAwaitQueue = async (prom: Array<Promise<any>>) => {
        await promise.value;
        
        awaiting.value = true;
        promise.value = Promise.all([
            prom,
            promise.value
        ]);

        awaiting.value = false;
    }

    return {
        waiting,
        getQueue,
        insertToAwaitQueue
    }
}