const StateViewKey = 'StateView';
const StatesViewKey = 'StatesView';

const StatesBehavior = Behavior({
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
            const children = this.getRelationNodes(StateViewKey);
            for (const child of children) {
                child._onParentChanged(newStates);
            }
            this._onStatesChanged(newStates, oldStates);
            this.onStatesChanged && this.onStatesChanged(newStates, oldStates);
        },

        _onStatesChanged(newStates, oldStates) {
            this.triggerEvent('statesChanged', {newStates, oldStates});
        }
    }
});

const StateBehavior = Behavior({
    properties: {
        state: {
            type: String,
            value: ''
        },
        active: {
            type: Boolean,
            value: false
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
    StatesBehavior,
    StateBehavior,
    StatesViewKey,
    StateViewKey
}