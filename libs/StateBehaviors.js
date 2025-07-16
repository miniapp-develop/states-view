const StateItemKey = 'StateItemKey';
const StateContainerKey = 'StateContainerKey';

const StateContainerBehavior = Behavior({
    properties: {
        state: {
            type: String,
            value: '',
            observer(newStates, oldStates) {
                if (newStates !== oldStates) {
                    this._onChanged(newStates, oldStates);
                }
            }
        }
    },
    methods: {
        _onChanged(newStates, oldStates) {
            const children = this.getRelationNodes(StateItemKey);
            for (const child of children) {
                child._onParentChanged(newStates);
            }
            this._onStateChanged(newStates, oldStates);
            this.onStateChanged && this.onStateChanged(newStates, oldStates);
        },

        _onStateChanged(newStates, oldStates) {
            this.triggerEvent('change', {newStates, oldStates});
        }
    }
});

const StateItemBehavior = Behavior({
    properties: {
        state: {
            type: String,
            value: ''
        },
        active: {
            type: Boolean,
            value: false
        },
        mode: {
            type: String,
            value: 'normal'
        }
    },
    methods: {
        _onParentChanged(parentState) {
            const currentActive = this.data.active;
            const newActive = parentState === this.data.state;
            if (newActive !== currentActive) {
                this.setData({
                    active: newActive
                });
                this._onStateChanged(newActive, currentActive);
                this.onStateChanged && this.onStateChanged(newActive, currentActive);
            }
        },
        _onStateChanged(newActive, oldActive) {
            this.triggerEvent('change', {
                active: newActive
            });
        }
    }
});

export {
    StateContainerBehavior,
    StateItemBehavior,
    StateContainerKey,
    StateItemKey
}