const {connectParentChildren, UiComponent} = require('@mini-dev/connect');

export function StateComponent(options) {
    return UiComponent(options, Component);
}

export const {parent, child} = connectParentChildren();
