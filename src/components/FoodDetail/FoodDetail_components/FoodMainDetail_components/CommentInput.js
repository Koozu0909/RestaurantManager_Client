import { Rating } from "@mui/lab";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function CommentInput({
  foodDetail,
  user,
  setIsComment,
  isComment,
  openComment,
  commentSelect,
  commentList,
  setCommentList,
}) {
  const [value, setValue] = useState(null);
  const [comment, setComment] = useState("");
  useEffect(() => {
    console.log(commentSelect)
    if(commentSelect){
        setValue(commentSelect.rate);
        setComment(commentSelect.comment);
      }
  }, []);
  const addComment = async () => {

    if (value === null || comment === " ") {
      toast.warning("Vui lòng điền đủ nhận xét");
      return;
    }
    const createComment = "http://localhost:8080/RestaurantManager/api/comment";

    try {
      const response = await axios.post(createComment, {
        comment: comment,
        rate: value,
        commentDate: Date.now(),
        userImageURL: user.imageURL,
        foodItemId: foodDetail.id,
        userId: user.id,
        userComment: user.username,
        id: commentSelect ? commentSelect.id : null
      });
      if(commentSelect){
        setCommentList((prevComments) =>
        prevComments.map((item) =>
          item.id === response.data.id ? response.data : item
        )
      );
      }else{
        setCommentList([...commentList, response.data]);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Lỗi khi gửi dữ liệu:", error);
    }
    setIsComment(true)
  };

  return (
    <div class="h-auto w-4/5 flex items-center justify-center">
      <div class="px-5 py-5 w-full">
        <div class="bg-white max-w-full rounded-2xl px-10 py-5 shadow-lg hover:shadow-2xl transition duration-500">
          <div className="flex">
            <img
              className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white"
              src={user.imageURL}
              alt=""
            />
            <div className="ml-5">
              <div class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer text-left">
                {user.username}
              </div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
          </div>
          <div className="mt-1 text-left w-full">
            <textarea
            value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="mt-4 text-md text-gray-600 w-full border border-black"
            ></textarea>
          </div>
          <div className="text-right w-full">
            {openComment === true ? (
              <button
                onClick={() => {
                  setIsComment(true);
                }}
                className=" px-2 py-1 bg-red-300 hover:bg-red-500 mr-4"
              >
                Huỷ
              </button>
            ) : null}

            <button
              onClick={addComment}
              className=" px-2 py-1 bg-blue-300 hover:bg-blue-500"
            >
              Nhận xét
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
