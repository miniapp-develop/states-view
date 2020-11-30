import _Component from "./_Component";
import {StateBehavior, StatesBehavior, StatesViewKey} from './BaseStates';

export default function (opts = {}) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    opts.behaviors.unshift(StateBehavior);
    if (!opts.relations) {
        opts.relations = {};
    }
    Object.assign(opts.relations, {
        [StatesViewKey]: {
            type: 'parent',
            target: StatesBehavior,
            linked(target) {
            },
            linkChanged(target) {
            },
            unlinked(target) {
            }
        }
    });

    return _Component(opts);
}