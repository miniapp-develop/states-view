import _Component from "./_Component";
import {StateBehavior, StatesBehavior, StateViewKey} from './BaseStates';

export default function (opts = {}) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    opts.behaviors.unshift(StatesBehavior);
    if (!opts.relations) {
        opts.relations = {};
    }
    Object.assign(opts.relations, {
        [StateViewKey]: {
            type: 'child',
            target: StateBehavior,
            linked(child) {
                child._onParentChanged(this.data.state);
            },
            linkChanged(target) {
            },
            unlinked(target) {
            }
        }
    });

    return _Component(opts);
}