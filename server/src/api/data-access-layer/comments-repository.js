const BaseRepository = require('./base-repository');
const reviewRepository = require('./review-repository');
const Comment = require('../../db/models/comment');
const { startSession } = require('mongoose');

class CommentsRepository extends BaseRepository {
  constructor () {
    super(Comment);
  }

  delete = async (commentId, beerId) => {
    const session = await startSession();
    session.startTransaction();
    await reviewRepository.update({ beerId }, {
      $pull: {
        comments: commentId
      }
    }, session);
    await this.model.findOneAndDelete({
      _id: commentId
    }, { session });
    await session.commitTransaction();
  }

  create = async (id, data) => {
    const session = await startSession();
    session.startTransaction();
    const review = await reviewRepository.getOneByCriteria({ beerId: id });
    const comment = await this.model.create({
      reviewId: review._id,
      ...data
    }, session);
    review.comments.push(comment);
    await review.save({ session });
    await session.commitTransaction();
    return comment;
  }
}

module.exports = new CommentsRepository();
