import { ref, computed, Ref } from "vue";

let promiseQueue: Array<QueueObj> = [];
let awaiting: Ref<Boolean> = ref(false);

export default function getQueuer() {
    const waiting = computed(() => {
        return awaiting.value;
    });

    const insertToAwaitQueue = async (prom: Promise<any>) => {
        return new Promise((resolve, reject) => {
            promiseQueue.push(new QueueObj(prom, resolve, reject));
            dequeue();
        });
        
    }

    return {
        waiting,
        insertToAwaitQueue
    }
}

function dequeue() {
    if(awaiting.value) {
        return false;
    }

    const item = promiseQueue.shift();
    if(!item) {
        return false;
    }

    awaiting.value = true;
    item.promise.then((value) => {
        awaiting.value = false;
        item.resolve(value);
        dequeue();
    }).catch((err) => {
        awaiting.value = false;
        item.reject(err);
        dequeue()
    })
}

class QueueObj {
    promise: Promise<any>;
    resolve: CallableFunction;
    reject: CallableFunction;

    constructor(prom: Promise<any>, res: CallableFunction, rej: CallableFunction) {
        this.promise = prom;
        this.resolve = res;
        this.reject = rej;
    }
}