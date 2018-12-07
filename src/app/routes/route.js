class Route {

    static PAGES = ['mode', 'stage', 'scores', 'upgrade', 'won', 'over', 'scenario/1', 'scenario/2', 'scenario/3']; 

    static getPage() {
        const path = window.location.pathname;
        this.page = (!path || path === '/') ? 'mode' : window.location.pathname.substr(1);
        if (!Route.PAGES.includes(this.page)) {
            this.page = 'mode';
        }
        return this.page;
    }
}
export default Route;