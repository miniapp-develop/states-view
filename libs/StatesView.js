import _Component from "./_Component";
import {parent} from './statesContext';

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
        getRelativeData() {
            return this.data.state;
        },
        _onChanged(newStates, oldStates) {
            const children = this.getRelative();
            for (const child of children) {
                child.onRelativeChanged(newStates);
            }
            this.triggerEvent('statesChanged', {newStates, oldStates});
            this.onStatesChanged && this.onStatesChanged(newStates, oldStates);
        }
    }
});

export default function (opts = {}, factory = _Component) {
    opts.behaviors = opts.behaviors || [];
    opts.behaviors.unshift(StatesBehavior);
    return parent(opts, factory);
}