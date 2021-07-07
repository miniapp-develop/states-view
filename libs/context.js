const rd = Math.random().toString();

function create(p, s) {
    return function (opts, factory) {
        opts.behaviors = opts.behaviors || [];
        opts.behaviors.unshift(p);
        opts.relations = opts.relations || {};
        opts.relations = {
            ...s,
            ...opts.relations
        };
        return factory(opts);
    }
}

function context() {
    const parentKey = 'parentKey' + rd;
    const parentBehavior = Behavior({
        methods: {
            getChildren() {
                return this.getRelationNodes(childKey);
            },
            getState() {
                console.log('default getState()');
                return null;
            }
        }
    });
    const childKey = 'childKey' + rd;
    const childBehavior = Behavior({
        methods: {
            getParent() {
                return this.getRelationNodes(parentKey)[0];
            },
            onParentChanged() {
                console.log('default onParentChanged()');
            }
        }
    });

    const parent = create(parentBehavior, {
        [childKey]: {
            type: 'child',
            target: childBehavior,
            linked(child) {
                child.onParentChanged(this.getState());
            }
        }
    });

    const child = create(childBehavior, {
        [parentKey]: {
            type: 'parent',
            target: parentBehavior
        }
    });

    return {
        parent,
        child
    }
}

export default context;