const get = async (model, includeModel) => {
    return await model.findAll({
        include: includeModel
    });
};

module.exports = { get };