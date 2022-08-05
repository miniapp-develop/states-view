const {connectParentChildren, createPresetComponent, MiniComponent} = require('@mini-dev/view-support');

export const {parent, child} = connectParentChildren('state');

const StatesComponent = createPresetComponent({
    options: {virtualHost: true}
});

exports.StatesView = function (option, factory = MiniComponent) {
    StatesComponent(option, parent, factory);
}

const StateBehavior = Behavior({
    properties: {
        state: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: 'normal'
        }
    },
    methods: {
        onMiniChanged(state) {
            const oldActive = this.data.active;
            const newActive = state === this.data.state;
            if (newActive !== oldActive) {
                this.setData({
                    active: newActive
                });
                this.triggerEvent('change', {
                    active: newActive
                });
                this.onStateChanged && this.onStateChanged(newActive, oldActive);
            }
        }
    }
});

const StateComponent = createPresetComponent({
    options: {virtualHost: true},
    data: {
        active: false
    },
    behaviors: [StateBehavior]
});

exports.StateView = function (option, factory = MiniComponent) {
    StateComponent(option, child, factory);
}