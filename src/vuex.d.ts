import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "@vue/runtime-core" {
    interface TestState {
        bob: number
    }

    interface State {
        test: TestState
    }

    interface ComponentCustomProperties {
        $store: Store<State>
    }
}