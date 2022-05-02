const { spots } = require("./models");

async function spotsByUserId(userId) {
    const spots = await spots.findAll({
        where: {
            userId
        }
    });
    return spots;
}

async function deleteSpot(spotId, userId) {
    const spot = await spots.destroy({ where: { id: spotId, userId } });
    return spot.id;
}

async function updateSpot(spot) {
    const updatedSpot = await spots.update(spot, { where: { id: spot.id } });
    return updatedSpot;
}

module.exports = [
    spotsByUserId,
    deleteSpot,
    updateSpot
];
