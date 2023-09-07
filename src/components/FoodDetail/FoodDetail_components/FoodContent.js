import React, { useContext, useEffect, useState } from "react";
import { Tab } from "@headlessui/react";
import FoodComment from "./FoodMainDetail_components/FoodComment";
import FoodMenu from "./FoodMainDetail_components/FoodMenu";
import axios from "axios";
import { MyUserContext } from "../../Layout";

export default function FoodContent({ foodDetail }) {
  const [commentList, setCommentList] = useState([]);
  const [isComment, setIsComment] = useState(false);
  const [user] = useContext(MyUserContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/RestaurantManager/api/comment/fooditem/${foodDetail.id}`
        );
        setCommentList(response.data);
        setIsComment(response.data.some((item) => item.userId === user.id));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  console.log(isComment)
  return (
    <div className="w-full h-auto bg-white  ">
      <Tab.Group>
        <Tab.List className="w-3/5 h-10 m-auto flex items-center justify-start">
          <Tab className=" px-2 py-1 hover:bg-blue-500 outline-none">
            Thực Đơn
          </Tab>
          <Tab className=" px-2 py-1 hover:bg-blue-500 outline-none">
            Đánh Giá
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <FoodMenu />
          <FoodComment
            foodDetail={foodDetail}
            setIsComment={setIsComment}
            commentList={commentList}
            setCommentList={setCommentList}
            isComment={isComment}
            user={user}
          />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
