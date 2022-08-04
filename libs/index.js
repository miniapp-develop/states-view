const {connectParentChildren, MiniComponent} = require('@mini-dev/view-support');

export function StateComponent(options) {
    return MiniComponent(options, Component);
}

export const {parent, child} = connectParentChildren('state');

exports.StatesView = function (opts = {}, factory = StateComponent) {
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

exports.StateView = function (opts = {}, factory = StateComponent) {
    opts.behaviors = opts.behaviors || [];
    opts.behaviors.unshift(StateBehavior);
    return child(opts, factory);
}