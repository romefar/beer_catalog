class BaseService {
  constructor (repository) {
    this.repository = repository;
  }

  getAll = async (excludeFields = null) => {
    return await this.repository.getAll(excludeFields);
  }

  getOneByCriteria = async (options) => {
    return await this.repository.getOneByCriteria(options);
  }

  getManyByCriteria = async (options) => {
    return await this.repository.getManyByCriteria(options);
  }

  getById = async (id) => {
    return await this.repository.getById(id);
  }

  delete = async (options) => {
    return await this.repository.delete(options);
  }

  create = async (data) => {
    return await this.repository.create(data);
  }

  update = async (conditionObject, updateObject) => {
    return await this.repository.update(conditionObject, updateObject);
  }
}

module.exports = BaseService;
