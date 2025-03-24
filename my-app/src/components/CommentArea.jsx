import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddComment from './AddComment';

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/books/${bookId}/comments`, {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2JkYzNmNDFlMTQwNjAwMTUzMTRjYTEiLCJpYXQiOjE3NDI1NzA4MDksImV4cCI6MTc0Mzc4MDQwOX0.Dar2Et9PmxMA8cP8V3PM6KwYkkjcvIen5h39tzHqR1A',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setComments(data);
        } else {
          throw new Error('Failed to fetch comments');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [bookId]);

  if (loading) return <p>Loading comments...</p>;
  if (error) return <p>Error fetching comments: {error}</p>;

  return (
    <div className="comment-area">
      <CommentList comments={comments} />
      <AddComment bookId={bookId} setComments={setComments} />
    </div>
  );
};

export default CommentArea;
