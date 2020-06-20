import React from 'react';
import withStyles from 'react-jss';
import styles from './list-styles';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const List = ({ items, classes }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        return (
          <li
            key={uuidv4()}
            className={classes.listItem}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired
};

export default withStyles(styles)(List);
