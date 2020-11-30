import StateView from "../../../libs/StateView";

StateView({
    created() {
        console.log('loading created');
    },
    methods: {
        onStateChanged(active) {
            console.log(`loading onStateChanged(${active})`);
        }
    }
});