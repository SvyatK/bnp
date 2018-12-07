class Route {

    static PAGES = ['mode', 'stage', 'scores', 'upgrade', 'won', 'over', 'scenario/1', 'scenario/2', 'scenario/3']; 

    static getPage() {
        const path = window.location.hash;
        this.page = (!path || path === '/') ? 'mode' : path.substr(2);
        if (!Route.PAGES.includes(this.page)) {
            this.page = 'mode';
        }
        return this.page;
    }
}
export default Route;