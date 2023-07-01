import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { Grid } from '../Grid/Grid';
import { comments } from '../../helpers/comments';
import { useSelector } from 'react-redux';
import { filteredSelector } from '../../redux/filterSlice';

export const Comments = () => {
  const filter = useSelector(filteredSelector);
  const filtered =  filter.toLowerCase();
  const filteredComments = comments.filter(comment => comment.content.toLowerCase().includes(filtered));
  console.log(filter)
  return (
    <Grid>
      {comments &&
        filteredComments.map((comment) => <Comment key={comment.id} {...comment} />)}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
