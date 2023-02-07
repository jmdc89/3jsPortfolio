import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        // console.log(this.actualRoom);
        
        this.setModel();

    }

    setModel() {

        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
                
            }

            // if(child.name === "Cube136") {
            //     console.log(child);
            //     child.material = new THREE.MeshPhysicalMaterial();
            //     child.material.roughness = 0;
            //     child.material.color.set(0x549dd2);
            //     child.material.ior = 3;
            //     child.material.transmission = 1;
            //     child.material.opacity = 1;
            // }

            if (child.name === "Computer") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }

        });
            
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.11,0.11,0.11);
        // this.actualRoom.rotation.y += Math.PI / 4;
    }

    resize() {}

    update() {}
}