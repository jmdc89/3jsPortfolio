import * as THREE from "three";
import Experience from "../Experience.js";

export default class Floor {
    constructor() {

        this.experience = new Experience();
        this.scene = this.experience.scene;

        this.setFloor();
        this.setCircles();

    }

    resize() {}

    update() {}
}