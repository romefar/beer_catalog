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

  deleteMany = async (options, session = null) => {
    return await this.model.remove(options, { session });
  }

  createMany = async (data, session = null) => {
    return await this.model.create([...data], { session });
  }

  create = async (data, session = null) => {
    const item = await this.model.create([data], { session });
    return item.pop();
  }

  update = async (conditionObject, updateObject, session = null) => {
    return await this.model.findOneAndUpdate(conditionObject, updateObject, { session, new: true });
  }
}

module.exports = BaseRepository;
