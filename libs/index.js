import ComponentCreator from "./_Component";
import {StateBehavior, StatesBehavior, StatesViewKey, StateViewKey} from './StateBehaviors';

export function StatesView(opts = {}, factory = ComponentCreator) {
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

export function StateView(opts = {}, factory = ComponentCreator) {
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