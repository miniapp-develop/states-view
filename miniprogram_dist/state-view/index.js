Component({
    externalClasses: ['ui-class'],
    options: {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/
    },
    properties: {
        state: {
            type: String,
            value: ''
        }
    },
    relations: {
        '../states-view/index': {
            type: 'parent',
            linked: function (target) {
                // console.log(target);
            },
            linkChanged: function (target) {
                // console.log(target);
            },
            unlinked: function (target) {
                // console.log(target);
            }
        }
    },
    methods: {}
});