export default function _Component(opts = {}) {
    if (!opts.externalClasses) {
        opts.externalClasses = [];
    }
    opts.externalClasses.unshift('mini-class');
    if (!opts.options) {
        opts.options = {};
    }
    opts.options = {
        virtualHost: true,
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/,
        ...opts.options
    }
    return Component(opts);
};