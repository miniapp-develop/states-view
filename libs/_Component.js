export default function _Component(opts = {}) {
    return Component({
        externalClasses: ['ui-class'],
        options: {
            styleIsolation: 'isolated',
            multipleSlots: true,
            pureDataPattern: /^\$_/
        },
        ...opts
    });
};