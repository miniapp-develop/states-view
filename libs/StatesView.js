import _Component from "./_Component";
import {StateBehavior, StatesBehavior, StateViewKey} from './BaseStates';

export default function (opts = {}, factory = _Component) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    if (!opts.relations) {
        opts.relations = {};
    }
    opts.behaviors.unshift(StatesBehavior);
    Object.assign(opts.relations, {
        [StateViewKey]: {
            type: 'child',
            target: StateBehavior,
            linked(child) {
                child._onParentChanged(this.data.state);
            }
        }
    });

    return factory(opts);
}