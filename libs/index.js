const {connectParentChildren, createPresetComponent, MiniComponent} = require('@mini-dev/view-support');

export const {parent, child} = connectParentChildren('state');

const Parent = createPresetComponent({
    options: {virtualHost: true}
});

exports.StatesView = function (option = {}, factory = MiniComponent) {
    Parent(option, function (o) {
        parent(o, factory);
    });
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

exports.StateView = function (opts = {}, factory = MiniComponent) {
    StateComponent(opts, function (o) {
        child(o, factory)
    })
}