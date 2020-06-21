import React from 'react';
import withStyles from 'react-jss';
import styles from './list-styles';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';

const List = ({ items, classes, transparent, title }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{title}</h3>
      <ul className={classes.list}>
        {items.map((item) => {
          return (
            <li
              key={uuidv4()}
              className={clsx({
                [classes.listItem]: true,
                [classes.bordersTransparent]: transparent
              })}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  transparent: PropTypes.bool
};

List.defaultProps = {
  transparent: false
};

export default withStyles(styles)(List);
