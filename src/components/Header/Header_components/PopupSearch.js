import React, { useEffect, useRef } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Popup from "reactjs-popup";
import bgSearch from "./../../../images/bg-search.png";

export default function PopupSearch() {
    const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Popup
      trigger={
        <button className="button">
          <FaMagnifyingGlass className="text-lg cursor-pointer" />
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal h-full w-full text-white">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="w-full h-3/6  flex justify-center">
            <img className="w-4/6 h-full" src={bgSearch} alt="" />
          </div>
          <div className="content h-1/6  text-center font-semibold">
            Đặt Thực phẩm, giao hàng từ 20'... có 13054 địa điểm ở TP. HCM từ
            00:00 - 23:59
          </div>
          <div className="content h-1/6 ">
            <input
             ref={inputRef}
              className="w-full border-b-2 border-white outline-none text-center bg-transparent"
              type="text"
            />
          </div>
        </div>
      )}
    </Popup>
  );
}
