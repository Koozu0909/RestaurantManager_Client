import { Tab } from "@headlessui/react";
import React, { useContext, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import CommentInput from "./CommentInput";

export default function FoodComment({
  foodDetail,
  isComment,
  setIsComment,
  commentList,
  user,
  setCommentList,
}) {
  const [openComment, setOpenComment] = useState(false);

    if(openComment){
      var commentSelect = commentList.find(item => item.userId = user.id)
    }

  return (
    <>
      {" "}
      <Tab.Panel className="w-3/5 h-auto bg-yellow-300 m-auto">
        {isComment === false ? (
          <CommentInput
          commentList={commentList}
          setCommentList={setCommentList}
          commentSelect={commentSelect}
            foodDetail={foodDetail}
            user={user}
            setIsComment={setIsComment}
            isComment={isComment}
            openComment={openComment}
          />
        ) : null}
        {commentList.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isComment={isComment}
            setIsComment={setIsComment}
            setOpenComment={setOpenComment}
            userId={user.id}
          />
        ))}
      </Tab.Panel>
    </>
  );
}
