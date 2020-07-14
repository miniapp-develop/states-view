Page({
    data: {
        activeState1: 'default',
        activeState2: 'c'
    },
    onLoad(query) {

    },
    onDefault(e) {
        this.setData({
            activeState1: 'default'
        });
    },
    onPending(e) {
        this.setData({
            activeState1: 'pending'
        });
    },
    onResolved(e) {
        this.setData({
            activeState1: 'resolved'
        });
    },
    onRejected(e) {
        this.setData({
            activeState1: 'rejected'
        });
    },
    onDefault2(e) {
        this.setData({
            activeState2: 'a'
        });
    },
    onPending2(e) {
        this.setData({
            activeState2: 'b'
        });
    },
    onRejected2(e) {
        this.setData({
            activeState2: 'c'
        });
    },
    onResolved2(e) {
        this.setData({
            activeState2: 'd'
        });
    }
});
