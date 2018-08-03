// get the currernt url and return first route path
export function getUrl() {
    return window.location.href.split('/')[3];
}