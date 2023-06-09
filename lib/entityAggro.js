let monster
let passiveWaterMob
let passiveMob
let neutralMob

if (Client.mcVersion().includes("fabric")) {
    neutralMob = Java.type("net.minecraft.class_5354");
    passiveMob = Java.type("net.minecraft.class_1429");
    passiveWaterMob = Java.type("net.minecraft.class_1480")
    monster = Java.type("net.minecraft.class_1588")
} else {   
    neutralMob = Java.type("net.minecraft.world.entity.NeutralMob");
    passiveMob = Java.type("net.minecraft.world.entity.animal.Animal");
    passiveWaterMob = Java.type("net.minecraft.world.entity.animal.WaterAnimal")
    monster = Java.type("net.minecraft.world.entity.monster.Monster")
}

module.exports = (/** @type {EntityHelper<any>} */entity) => {
    const mob = entity.getRaw();
    if (mob instanceof passiveMob || mob instanceof passiveWaterMob) {
        return {
            Passive: true,
            Neutral: false,
            Hostile: false,
            Player: false,
            Unknown: false
        }
    } else if (mob instanceof neutralMob) {
        return {
            Passive: false,
            Neutral: true,
            Hostile: false,
            Player: false,
            Unknown: false
        }
    }
    else if (mob instanceof monster && !(mob instanceof neutralMob)) {
        return {
            Passive: false,
            Neutral: false,
            Hostile: true,
            Player: false,
            Unknown: false
        }
    } else if (entity.getType() == "minecraft:player") {
        return {
            Passive: false,
            Neutral: false,
            Hostile: false,
            Player: true,
            Unknown: false
        }
    }
    else {
        return {
            Passive: false,
            Neutral: false,
            Hostile: false,
            Player: false,
            Unknown: true
        }
    }
}
