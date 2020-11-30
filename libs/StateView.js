import _Component from "./_Component";
import {StateBehavior, StatesBehavior, StatesViewKey} from './BaseStates';

export default function (opts = {}, factory = _Component) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    if (!opts.relations) {
        opts.relations = {};
    }
    opts.behaviors.unshift(StateBehavior);
    Object.assign(opts.relations, {
        [StatesViewKey]: {
            type: 'parent',
            target: StatesBehavior
        }
    });

    return factory(opts);
}