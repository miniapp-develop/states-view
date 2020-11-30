export default function _Component(opts = {}) {
    if (!opts.externalClasses) {
        opts.externalClasses = [];
    }
    opts.externalClasses.unshift('ui-class');
    if (!opts.options) {
        opts.options = {};
    }
    opts.options = {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/,
        ...opts.options
    }
    return Component(opts);
};