import {StateItem} from "../../../libs/index";

StateItem({
    created() {
        console.log('[loading]created');
    },
    methods: {
        onStateChanged(active) {
            console.log(`[loading]onStateChanged(${active})`);
        }
    }
});