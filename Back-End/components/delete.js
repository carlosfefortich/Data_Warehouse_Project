const deleteOne = async (id, model) =>{
    return await model.destroy({
        where: {
            id: id
        }
    });
};

module.exports = { deleteOne }