import { createStore } from 'vuex';
import test from "@/store/test";

export const store = createStore({
    modules: {
        test
    }
});