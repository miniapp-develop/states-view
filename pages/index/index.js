Page({
    data: {
        pageState: 'page-loading',
        contentState: 'content-normal',
        list: new Array(100).fill(0).map((ele, index) => {
            return {
                name: `item-${index}`
            };
        })
    },
    onLoad(query) {
        setTimeout(() => {
            this.setData({
                pageState: 'page-fail'
            });
        }, 1000);
    },
    onTapRetry(e) {
        this.setData({
            pageState: 'page-loading'
        });
        setTimeout(() => {
            this.setData({
                pageState: 'page-content'
            });
        }, 1000);
    },
    onTapReload(e) {
        this.setData({
            pageState: 'page-loading'
        });
        setTimeout(() => {
            this.setData({
                pageState: 'page-fail'
            });
        }, 1000);
    },
    onTapClear(e) {
        this.setData({
            pageState: 'page-empty'
        });
    },
    onPageStatesChanged(e) {
        console.log('onStatesChanged', e.detail);
    },
    onPageStateChanged(e) {
        console.log('onStateChanged', e.detail);
    },
    onPulling() {
        setTimeout(() => {
            this.setData({
                contentState: 'content-normal'
            });
        }, 3000);
    }
});
