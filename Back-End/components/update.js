const update = async (id, model, updateObject) =>{
    return await model.update(updateObject, {
        where: {
            id: id
        }
    });
};

module.exports = { update };