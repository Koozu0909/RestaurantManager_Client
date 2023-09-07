import { Rating } from "@mui/lab";
import React from "react";
import { FaRegPenToSquare, FaTrashCan } from "react-icons/fa6";

export default function CommentCard({ comment, isComment,setOpenComment ,setIsComment,userId}) {
  return (
    <div class="h-auto w-4/5 flex items-center justify-center">
      <div class="px-5 py-1 w-full">
        <div class="bg-white max-w-full rounded-2xl px-6 py-2 shadow-lg hover:shadow-2xl transition duration-500">
          <div className="flex">
            <img
              class="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white"
              src={comment.userImageURL}
              alt=""
            />
            <div className="ml-5">
              <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer text-left">
                {comment.userComment}
              </h1>
              <Rating name="read-only" value={comment.rate} readOnly />
            </div>
            {userId === comment.userId ? (
              <div className="flex h-2/5  w-full justify-end">
                <button
                 onClick={()=> {setOpenComment(true) ;setIsComment(false)}}
                 className="px-1 py-1 bg-blue-300 hover:bg-blue-600 ml-1">
                  <FaRegPenToSquare />
                </button>
                <button className="px-1 py-1 bg-red-300 hover:bg-red-600 ml-1">
                  <FaTrashCan />
                </button>
              </div>
            ) : null}
          </div>
          <div class="mt-4 text-left">
            <p class="mt-4 text-md text-gray-600">{comment.comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
