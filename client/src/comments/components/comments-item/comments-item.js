import React from 'react';
import Card from '../../../shared/components/ui-elements/card';
import styles from './comments-item-styles';
import withStyles from 'react-jss';
import dateFormatter from '../../../utils/dateFormatter';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const CommentsItem = (props) => {
  const { id, classes, imageUrl, userName, isLoggedIn, comment, pubDate, userData, creatorId, showModalHandler } = props;
  const createdAt = dateFormatter(pubDate);
  return (
    <Card className={classes.commentItem}>
      <div className={classes.imageContainer}>
        <img src={`http://localhost:5000/${imageUrl}`} alt={userName} title={userName}/>
      </div>
      <div className={classes.info}>
        <div className={classes.stampInfo}>
          <span className={classes.userName}>{userName}</span>
          <span>{createdAt}</span>
        </div>
        <p className={classes.comment}>{comment}</p>
        {isLoggedIn && userData.userId === creatorId &&
           <div className={classes.actions}>
             <Button
               variant="contained"
               color="secondary"
               startIcon={<DeleteIcon />}
               onClick={() => showModalHandler(id)}
             >
           Delete
             </Button>
           </div>
        }
      </div>
    </Card>
  );
};

CommentsItem.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  creatorId: PropTypes.string.isRequired,
  userData: PropTypes.object,
  imageUrl: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  showModalHandler: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentsItem);
