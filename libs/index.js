const {connectParentChildren, createPresetComponent, MiniComponent} = require('@mini-dev/view-support');

export const {parent, child} = connectParentChildren('state');

exports.StatesView = function (opts = {}, factory = MiniComponent) {
    return parent(opts, factory);
}

const StateBehavior = Behavior({
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
        onMiniChanged(state) {
            const oldActive = this.data.active;
            const newActive = state === this.data.state;
            if (newActive !== oldActive) {
                this.setData({
                    active: newActive
                });
                this.triggerEvent('stateChanged', {
                    active: newActive
                });
                this.onStateChanged && this.onStateChanged(newActive, oldActive);
            }
        }
    }
});

const StateComponent = createPresetComponent({
    behaviors: [StateBehavior]
});

exports.StateView = function (opts = {}, factory = MiniComponent) {
    StateComponent(opts, function (o) {
        child(o, factory)
    })
}