Page({
    data: {
        state1: '1',
        state2: '3'
    },
    onLoad(query) {

    },
    onStatesChanged(e) {
        console.log('onStatesChanged', e.detail);
    },
    onDefault(e) {
        this.setData({
            state1: e.currentTarget.dataset.state
        });
    },
    onTapNested(e) {
        this.setData({
            state2: e.currentTarget.dataset.state
        });
    }
});
