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

    setPosX(value) {
        this.posX = value;
    }

    getPosX() {
        return this.posX;
    }

    setPosY(value) {
        this.posY = value;
    }

    getPosY() {
        return this.posY;
    }

    setCoordinates(x ,y) {
        this.setPosX(x);
        this.setPosY(y);
    }
}
export default Facility;