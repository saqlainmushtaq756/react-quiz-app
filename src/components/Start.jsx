import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/QuizHolder";
// import image from "../assets/Images/image2.jpg";
import image from "../assets/Images/emogi.png";
// import image from "../assets/Images/image3.jpg";
// import image from "../assets/Images/image1.jfif";
// import img2 from "../assets/Images/emoji2.jpg";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

// import Countdown from "./Countdown";

const Start = () => {
  const { setStart } = useContext(QuizContext);
  const [countDown, setCountDown] = useState(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let timer;
    if (countDown !== null && countDown > 0) {
      timer = setTimeout(() => setCountDown(countDown - 1), 1000);
    } else if (countDown === 0) {
      setStart(true);
      setOpen(false); // Hide Dialog
    }
    return () => clearTimeout(timer); // Cleanup on unmount/update
  }, [countDown, setStart]);
  const handleStartBtn = () => {
    setOpen(true);
    setCountDown(5);
  };

  const handleClose = () => {
    setOpen(false);
    setCountDown(null);
    setStart(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-700 text-white">
        <div>
          <div className="flex flex-row items-center justify-between gap-2 p-2">
            <h1 className="text-4xl font-[luckiest] font-extrabold text-[#e78f36] animate-pulse">
              Welcome To the Quiz App{" "}
            </h1>
            <span>
              <img
                src={image}
                width={100}
                height={100}
                className="animate-bounce rounded-full "
              />
            </span>{" "}
          </div>
        </div>
        {countDown === null ? (
          <button
            className="border border-orange-500 mt-5 px-5 py-3 text-2xl rounded cursor-pointer "
            onClick={handleStartBtn}
          >
            Lets Start 👈
          </button>
        ) : (
          <Dialog open={open} onClose={handleClose} className="relative z-50 ">
            <div className="fixed inset-0  bg-gray-700" aria-hidden="true" />
            <div className="fixed inset-0 flex items-center justify-center p-4 ">
              <DialogPanel className="w-full max-w-md rounded bg-white  p-6 text-center shadow-xl">
                <DialogTitle className="text-xl font-bold mb-4 flex flex-col items-center ">
                  <img src={img2} height={100} width={100} />
                  Quiz will start in Just
                </DialogTitle>
                <p className="text-4xl text-orange-600 font-extrabold">
                  {countDown}s
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Cancel
                </button>
              </DialogPanel>
            </div>
          </Dialog>
        )}
      </div>
    </>
  );
};

export default Start;
