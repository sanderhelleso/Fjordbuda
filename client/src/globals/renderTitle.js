import { toTitleCase } from '../globals/toTitleCase';
export function renderStoreTitle() {
    // get selected store from url
    const store = toTitleCase(window.location.href.split('/')[4].split('-').join(' '));
    
    // if store contains %C3%A5 (å), replace with correct store name
    const splittedStore = store.split(' ')[1].split('')[0];
    if (splittedStore === '%') {
        return `${store.split(' ')[0]} Ålesund`;
    }

    return store;
}
