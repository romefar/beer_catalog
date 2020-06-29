import React from 'react';
import Card from '../../../shared/components/ui-elements/card';
import styles from './comment-item-style';
import withStyles from 'react-jss';

const CommentItem = (props) => {
  const { classes, imageUrl, comment } = props;
  return (
    <Card className={classes.commentItem}>
      <div className={classes.imageContainer}>
        <img src={imageUrl} alt={name} title={name}/>
      </div>
      <div className={classes.info}>
        <p className={classes.comment}>{comment}</p>
      </div>
    </Card>
  );
};

export default withStyles(styles)(CommentItem);
