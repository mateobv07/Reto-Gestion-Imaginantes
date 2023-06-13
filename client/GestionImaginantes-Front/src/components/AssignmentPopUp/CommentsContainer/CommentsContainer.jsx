import React from 'react';
import { Box, DialogContent, Dialog, DialogContentText, DialogTitle } from "@mui/material";
import { BsXLg } from "react-icons/bs";

const CommentsContainer = ({comments}) => {
    console.log(comments)
  return (
   <div>
        {comments.map((comment) => (
            <div >
                {comment.createdByAdmin}
                {comment.createdAt}
                {comment.content}
            </div>
        ))}
   </div>
  );
}

export default CommentsContainer;