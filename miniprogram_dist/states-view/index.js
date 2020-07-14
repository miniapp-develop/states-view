const PATH = '../state-view/index';

Component({
    externalClasses: ['ui-class'],
    options: {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/
    },
    properties: {
        activeState: {
            type: String,
            value: '',
            observer(newValue, oldValue) {
                if (newValue !== oldValue) {
                    this.onChildChanged(newValue);
                }
            }
        }
    },
    relations: {
        [PATH]: {
            type: 'child',
            linked(target) {
                target.setData({
                    parentState: this.data.activeState
                });
            },
            linkChanged(target) {
                console.log(target);
            },
            unlinked(target) {
                console.log(target);
            }
        }
    },
    methods: {
        onChildChanged(parentState) {
            const children = this.getRelationNodes(PATH);
            for (let child of children) {
                child.setData({
                    parentState: parentState
                });
            }
        }
    },
});