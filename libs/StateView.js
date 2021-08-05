import _Component from "./_Component";
import {child} from './statesContext';

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
        onRelativeChanged(states) {
            if (typeof states === 'string') {
                states = [states];
            }
            const oldActive = this.data.active;
            const newActive = !!states.find(ele => ele === this.data.state);
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

export default function (opts = {}, factory = _Component) {
    opts.behaviors = opts.behaviors || [];
    opts.behaviors.unshift(StateBehavior);
    return child(opts, factory);
}