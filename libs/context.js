function _array(val) {
    return val || [];
}

function _object(val) {
    return val || {};
}

function _concat(a, b) {
    return _array(a).concat(_array(b))
}

function _assign(a, b) {
    return Object.assign({}, _object(a), _object(b));
}

function preset(extra) {
    return function (options = {}, factory) {
        options.externalClasses = _concat(extra.externalClasses, options.externalClasses);
        options.behaviors = _concat(extra.behaviors, options.behaviors);
        options.options = _assign(_object(extra.options), _object(options.options));
        options.relations = _assign(_object(extra.relations), _object(options.relations));
        return factory(options);
    }
}

const UiComponent = preset({
    externalClasses: ['ui-class'],
    options: {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/
    }
});

function connect(high, low) {
    const randKey = Math.random().toString();
    const highKey = 'high$' + randKey;
    const lowKey = 'low$' + randKey;

    const highBehavior = Behavior({
        methods: {
            getRelative() {
                return this.getRelationNodes(lowKey);
            },
            getRelativeData() {
                return null;
            }
        }
    });

    const lowBehavior = Behavior({
        methods: {
            getRelative() {
                return this.getRelationNodes(highKey)[0];
            },
            getRelativeData() {
                return null;
            },
            onRelativeChanged() {
                console.log('default onRelativeChanged()');
            }
        }
    });

    const highComponent = preset({
        behaviors: [highBehavior],
        relations: {
            [lowKey]: {
                type: low,
                target: lowBehavior,
                linked(child) {
                    child.onRelativeChanged(this.getRelativeData());
                }
            }
        }
    });

    const lowComponent = preset({
        behaviors: [lowBehavior],
        relations: {
            [highKey]: {
                type: high,
                target: highBehavior
            }
        }
    });

    return {
        highComponent,
        lowComponent
    }
}

function connectParentChildren() {
    const {highComponent, lowComponent} = connect('parent', 'child');
    return {
        parent: highComponent,
        child: lowComponent
    }
}

function connectAncestorDescendant() {
    const {highComponent, lowComponent} = connect('ancestor', 'descendant');
    return {
        ancestor: highComponent,
        descendant: lowComponent
    }
}

export {
    connectParentChildren,
    connectAncestorDescendant,
};