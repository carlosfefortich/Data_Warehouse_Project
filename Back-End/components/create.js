const create = async (model, newObject) =>{
    return await model.create(newObject);
};

module.exports = { create }