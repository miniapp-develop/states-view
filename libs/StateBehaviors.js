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
            this.triggerEvent('stateChanged', {newStates, oldStates});
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
        _onParentChanged(states) {
            if (typeof states === 'string') {
                states = [states];
            }
            const current = this.data.active;
            const active = !!states.find(ele => ele === this.data.state);
            if (active !== current) {
                this.setData({
                    active
                });
                this._onStateChanged(active, current);
                this.onStateChanged && this.onStateChanged(active, current);
            }
        },
        _onStateChanged(newActive, oldActive) {
            this.triggerEvent('stateChanged', {
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