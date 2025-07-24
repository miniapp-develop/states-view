Page({
    data: {
        useWrap: true,
        pageState: 'page-loading',
        successState: 'success-empty',
        list: new Array(50).fill(0).map((ele, index) => {
            return {
                name: `item-${index}`
            };
        })
    },
    onUseWrapChanged(e) {
        console.log('onUseWrapChanged', e.detail.value);
        this.setData({
            useWrap: e.detail.value
        })
    },
    onTapPageState(e) {
        const state = e.currentTarget.dataset.state;
        this.setData({
            pageState: state
        })
    },
    onTapSuccessState(e) {
        const state = e.currentTarget.dataset.state;
        this.setData({
            successState: state
        })
    },
    onTapRetry(e) {
        this.setData({
            pageState: 'page-loading'
        });
        setTimeout(() => {
            this.setData({
                pageState: 'page-success'
            });
        }, 1000);
    },
    onTapSuccessNew(e) {
        this.setData({
            successState: 'success-loading'
        });
        setTimeout(() => {
            this.setData({
                successState: 'success-content'
            });
        }, 1000);
    },
    onPageStateChanged(e) {
        console.log('onPageStateChanged', e.detail);
    },
    onSuccessStateChanged(e) {
        console.log('onSuccessStateChanged', e.detail);
    }
});
