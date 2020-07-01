const commentsRespositry = require('../data-access-layer/comments-repository');
const reviewRepository = require('../data-access-layer/review-repository');
const beerRepository = require('../data-access-layer/beer-repository');

const excludedFields = '-email -createdAt -updatedAt -favourites -__v -likes -dislikes';

class CommentsService {
  getInitialComments = async (id) => {
    const review = await reviewRepository.getOneByCriteria({ beerId: id });

    if (!review) {
      const isBeerExist = await beerRepository.getOneById(id);

      if (!isBeerExist) {
        throw new Error('Beer with the given id does not exist.');
      }

      const review = await reviewRepository.create({ beerId: id });

      return await review.populate({
        path: 'comments',
        populate: {
          path: 'creatorId',
          select: excludedFields
        }
      }).execPopulate();
    }
    return await review.populate({
      path: 'comments',
      populate: {
        path: 'creatorId',
        select: excludedFields
      }
    }).execPopulate();
  }

  addNewComment = async (id, data) => {
    const comment = await commentsRespositry.create(id, data);
    return await comment.populate('creatorId').execPopulate();
  }

  deleteComment = async (commentId, beerId) => {
    return await commentsRespositry.delete(commentId, beerId);
  }
}

module.exports = new CommentsService();
