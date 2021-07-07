export default function _Component(opts = {}) {
    opts.externalClasses = opts.externalClasses || [];
    opts.externalClasses.unshift('ui-class');
    opts.options = {
        styleIsolation: 'isolated',
        multipleSlots: true,
        pureDataPattern: /^\$_/,
        ...opts.options
    }
    return Component(opts);
};