import React, { useState } from "react";
import MediaQuery from "react-responsive";

const Container = (props) => {
  return (
    <div>
      <MediaQuery maxWidth={1000}>
        <div className=" gap-2 mr-4 ">
          {props.data &&
            props.data.map((item, index) => {
              if (item.i !== undefined) {
                return (
                  <div
                    key={index}
                    className="compgri h-96 rounded shadow-2xl transition duration-300 mt-6 ml-5 justify-center items-center text-center"
                  >
                    <div className="justify-center items-center text-center flex flex-col mt-4">
                      <img
                        className="h-40 w-40 rounded-full ml-1 mb-8 shadow-lg border-gray-800 border hover:border-gray-700 transition"
                        src={item.i.imageUrl}
                      />

                      <div className="">
                        <label className="text-white  font-bold statliches text-2xl opacity-90">
                          {props.data && props.data[index].l}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].q
                            ? props.data[index].q
                            : ""}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          Rank {props.data && props.data[index].rank}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].s}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].y}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="compgri h-96 rounded shadow-2xl transition duration-300 mt-6 ml-5 justify-center items-center text-center"
                  >
                    <div className="justify-center items-center text-center flex flex-col mt-4">
                      <img
                        className="h-40 w-40 rounded-full ml-1 mb-8 shadow-lg border-gray-800 border hover:border-gray-700 transition"
                        src="https://w7.pngwing.com/pngs/273/858/png-transparent-question-mark-computer-icons-exclamation-mark-desktop-question-mark-emoji-angle-text-logo.png"
                      />

                      <div className="">
                        <label className="text-white  font-bold statliches text-2xl opacity-90">
                          {props.data && props.data[index].l}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].q
                            ? props.data[index].q
                            : ""}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                        Rank  {props.data && props.data[index].rank}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].s}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].y
                            ? props.data[index].y
                            : ""}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </MediaQuery>
      <MediaQuery minWidth={1000}>
        <div className="grid grid-cols-4 gap-2 mr-2 ">
          {props.data &&
            props.data.map((item, index) => {
              if (item.i !== undefined) {
                return (
                  <div
                    key={index}
                    className="compgri h-96 rounded shadow-2xl transition duration-300 mt-6 ml-5 justify-center items-center text-center"
                  >
                    <div className="justify-center items-center text-center flex flex-col mt-4">
                      <img
                        className="h-40 w-40 rounded-full ml-1 mb-8 shadow-lg border-gray-800 border hover:border-gray-700 transition"
                        src={item.i.imageUrl}
                      />

                      <div className="justify-center items-center text-center">
                        <label className="text-white  font-bold statliches text-2xl opacity-90">
                          {props.data && props.data[index].l}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-gray-500 andika text-xs font-bold">
                          {props.data && props.data[index].q
                            ? props.data[index].q
                            : ""}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          Rank {props.data && props.data[index].rank}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          {props.data && props.data[index].s}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          {props.data && props.data[index].y}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div
                    key={index}
                    className="compgri h-96 rounded shadow-2xl transition duration-300 mt-6 ml-5 justify-center items-center text-center"
                  >
                    <div className="justify-center items-center text-center flex flex-col mt-4">
                      <img
                        className="h-40 w-40 rounded-full ml-1 mb-8 shadow-lg border-gray-800 border hover:border-gray-700 transition"
                        src="https://w7.pngwing.com/pngs/273/858/png-transparent-question-mark-computer-icons-exclamation-mark-desktop-question-mark-emoji-angle-text-logo.png"
                      />

                      <div className="">
                        <label className="text-white font-bold statliches opacity-90">
                          {props.data && props.data[index].l}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          {props.data && props.data[index].q
                            ? props.data[index].q
                            : "Unknown"}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          Rank {props.data && props.data[index].rank}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          {props.data && props.data[index].s}
                        </label>
                      </div>
                      <div className="">
                        <label className="text-xs text-gray-500 andika font-bold">
                          {props.data && props.data[index].y
                            ? props.data[index].y
                            : ""}
                        </label>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </MediaQuery>
    </div>
  );
};

export default Container;
