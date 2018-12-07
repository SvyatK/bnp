class Facility {
    constructor() {
        this.isCrossable = false;
        this.imgSource = '/images/default.gif';
    }

    getIsCrossable() {
        return this.isCrossable;
    }

    setImgSource(value) {
        this.imgSource = value;
    }

    getImgSource() {
        return this.imgSource;
    }
}
export default Facility;