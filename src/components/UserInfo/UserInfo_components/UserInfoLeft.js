import React, { useContext, useState } from "react";
import { MyUserContext } from "../../Layout";
import { FaPen, FaRegBell, FaRegUser, FaStore } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function UserInfoLeft() {
  const [user] = useContext(MyUserContext);
  const [showInfo, setShowInfo] = useState(true);

  return (
    <div className="w-1/6 h-auto ">
      <div className="w-full h-20  flex items-center justify-center">
        <div className="w-full h-4/5 flex">
          <div className="w-1/5 2xl:h-4/6 xl:h-3/6 rounded-full overflow-hidden">
            <img className="w-full h-full" src={user.imageURL} alt="" />
          </div>
          <div className="w-4/6 h-2/6 ml-3 text-left text-base">
            <div className="font-bold">{user.username}</div>
            <Link
              to={"/user/profile"}
              className="flex items-center text-sm text-gray-500 cursor-pointer"
            >
              <FaPen className="text-xs mr-1" />
              Sửa hồ sơ
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-96  flex items-start flex-col">
        <div className="w-full h-auto text-left">
            <div className="cursor-pointer flex items-center mb-3" onClick={()=>setShowInfo(!showInfo)}> <span className="mr-4 text-blue-500 text-base"> <FaRegUser/></span>Hồ sơ cá nhân</div>
            {showInfo && (
            <div className="flex flex-col ml-9">
            <Link className="mb-3" to={"/user/profile"}>Hồ sơ</Link>
            <Link className="mb-3"  to={"/user/change_pass"}>Thay đổi mật khẩu</Link>
            <Link className="mb-3" >thong tin 3</Link>
        </div>
      )}
        </div>
        <div className="w-full h-auto text-left">
            <Link to={"/user/notification"} className="cursor-pointer flex items-center mb-3"> <span className="mr-4 text-red-500 text-base"> <FaRegBell/></span>Thông Báo</Link>
        </div>
        <div className="w-full h-auto text-left">
            <div className="cursor-pointer flex items-center mb-3"> <span className="mr-4 text-orange-600 text-base"> <FaStore/></span>Dăng ký mở cửa hàng</div>
        </div>
      </div>
    </div>
  );
}
