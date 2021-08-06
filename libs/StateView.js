import {child, StateComponent} from './statesContext';

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
        onRelativeStateChanged(state) {
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

export default function (opts = {}, factory = StateComponent) {
    opts.behaviors = opts.behaviors || [];
    opts.behaviors.unshift(StateBehavior);
    return child(opts, factory);
}