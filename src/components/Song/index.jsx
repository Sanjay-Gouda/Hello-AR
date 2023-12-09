import { useContext, useState } from "react";
import Breadcrumb from "../shared/Breadcrumb/breadcrumb";
import { SongModal } from "../shared/Modal/modal";
import { Sidebar } from "../shared/Sidebar/sidebar";
import { Table } from "../shared/Table/table";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { SongList } from "../../context/context";
const Song = () => {
  const [open, setOpen] = useState(false);
  const { currentSong } = useContext(SongList);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full h-screen flex ">
        <div className="w-[20%] ">
          <Sidebar />
        </div>
        <div
          className=" w-[80%]  flex flex-col justify-between  "
          style={{ padding: "2rem" }}
        >
          <div className="flex flex-col gap-4">
            <Breadcrumb />
            <div className="flex w-full justify-between">
              <p className="text-default text-[20px]">Songs</p>

              <button
                className="bg-yellow px-4 py-2 w-auto text-default font-normal text-[14px]"
                onClick={handleOpen}
              >
                Add Songs
              </button>
            </div>

            <Table />
            <SongModal open={open} handleOpen={handleOpen} />
          </div>

          <div className="flex w-full flex-col gap-1">
            {currentSong?.imgURL && (
              <div className="flex w-full justify-start items-center gap-2">
                <div className="w-[72px] h-[72px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={currentSong?.imgURL}
                  />
                </div>
                <p>{currentSong?.name}</p>
              </div>
            )}

            <AudioPlayer
              autoPlay={false}
              src={currentSong?.src}
              controls
              className="audio-player"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
