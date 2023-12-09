import { useContext } from "react";
import { IoMdPlayCircle } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { SongList } from "../../../context/context";

export const Table = () => {
  const { list, setList, setCurrentSong } = useContext(SongList);

  const handlePlaySong = (src, name, url) => {
    console.log(src);
    setCurrentSong({
      src: src,
      name: name,
      imgURL: url,
    });
  };

  const handleRemove = (id) => {
    const restSongs = list?.filter((list) => list.id !== id);
    console.log(restSongs);
    setList(restSongs);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-default uppercase"
                    >
                      Source Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-default uppercase"
                    >
                      Source
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs  font-medium text-default uppercase"
                    >
                      Added On
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 ">
                  {list?.map((list) => (
                    <>
                      <tr>
                        <td className="px-6 py-4 flex gap-1 items-center whitespace-nowrap text-sm text-left font-medium text-gray-800 ">
                          <div className="w-[72px] h-[72px] overflow-hidden">
                            <img
                              className="w-full h-full object-contain"
                              src={list?.thumbnail?.url}
                            />
                          </div>
                          <p>{list?.formValues?.name}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-800 ">
                          {list?.formValues?.source}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-800 ">
                          {list?.currentDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap flex justify-between text-start text-sm font-medium">
                          <button
                            type="button"
                            onClick={() =>
                              handlePlaySong(
                                list?.formValues?.link,
                                list?.formValues?.name,
                                list?.thumbnail?.url
                              )
                            }
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none "
                          >
                            <IoMdPlayCircle size="40" color="#FDB927" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemove(list.id)}
                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none "
                          >
                            <MdOutlineDelete size="30" color="gray" />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
