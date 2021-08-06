import {parent, StateComponent} from './statesContext';

export default function (opts = {}, factory = StateComponent) {
    return parent(opts, factory);
}