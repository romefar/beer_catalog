class BaseRepository {
  constructor (model) {
    this.model = model;
  }

  getAll = async (excludeFields) => {
    return await this.model.find({}, excludeFields);
  }

  getOneByCriteria = async (options) => {
    return await this.model.findOne(options);
  }

  getManyByCriteria = async (options) => {
    return await this.model.find(options);
  }

  getById = async (id) => {
    return await this.model.findById(id);
  }

  delete = async (options) => {
    return await this.model.findOneAndDelete(options);
  }

  create = async (data) => {
    return await this.model.create(data);
  }

  update = async (conditionObject, updateObject) => {
    return await this.model.findOneAndUpdate(conditionObject, updateObject, { new: true });
  }
}

module.exports = BaseRepository;
