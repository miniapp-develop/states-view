const {StateView} = require("../../../libs/index")

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