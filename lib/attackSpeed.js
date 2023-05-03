let method1, method2, method3;

if (Client.mcVersion().includes("fabric")) {
    Chat.log("Using Fabric mappings.")
    method1 = 'method_6127';
    method2 = 'method_26851';
    method3 = 'method_6194';
} else {   
    Chat.log("Using Forge mappings.")
    method1 = 'm_21204_';
    method2 = "m_22170_";
    method3 = "m_22135_";
}

/**
 * Gets the attack speed of the player's currently equpped item.
 * @returns {number}
 */

module.exports = () => {
    const living = Player.getPlayer().asLiving().getRaw();
    const attributes = living[method1]();
    const instances = attributes[method2]();
    return instances[0][method3]();
}