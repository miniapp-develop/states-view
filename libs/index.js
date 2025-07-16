import ComponentCreator from "./_Component";
import {StateItemBehavior, StateContainerBehavior, StateContainerKey, StateItemKey} from './StateBehaviors';

export function StateContainer(opts = {}, factory = ComponentCreator) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    if (!opts.relations) {
        opts.relations = {};
    }
    opts.behaviors.unshift(StateContainerBehavior);
    Object.assign(opts.relations, {
        [StateItemKey]: {
            type: 'child',
            target: StateItemBehavior,
            linked(child) {
                child._onParentChanged(this.data.state);
            }
        }
    });

    return factory(opts);
}

export function StateItem(opts = {}, factory = ComponentCreator) {
    if (!opts.behaviors) {
        opts.behaviors = [];
    }
    if (!opts.relations) {
        opts.relations = {};
    }
    opts.behaviors.unshift(StateItemBehavior);
    Object.assign(opts.relations, {
        [StateContainerKey]: {
            type: 'parent',
            target: StateContainerBehavior
        }
    });

    return factory(opts);
}