/* eslint-disable react/prop-types */
import Modal from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import { FormInput } from "../InputBox/formInput";
import { useContext, useState } from "react";
import { Upload } from "../Upload/upload";
import { LightButton } from "../Button/lightButton";
import { DefaultButton } from "../Button/defaultButton";
import { MdOutlineDelete } from "react-icons/md";
import { SongList } from "../../../context/context";

export const SongModal = ({ open, handleOpen }) => {
  const [formValues, setFormValues] = useState({});
  const [thumbnail, setThumbnail] = useState({
    url: "",
    name: "",
  });
  const { setList } = useContext(SongList);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleImageChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setThumbnail({
      url: image,
      name: e.target.files[0].name,
    });
  };

  const clearField = () => {
    setFormValues({});
    setThumbnail({});
  };

  const handleAdd = () => {
    const { name, link, source } = formValues;
    const { url } = thumbnail;

    if (name && link && url && source) {
      const date = new Date();
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let currentDate = `${day}-${month}-${year}`;
      const newList = { formValues, thumbnail, currentDate };
      setList((prev) => [...prev, newList]);
      handleOpen();
      clearField();
    } else {
      alert("Please, fill out the form to add a Song");
    }
  };

  const handleDelete = () => {
    setThumbnail({});
  };

  return (
    <>
      <Modal open={open} onClose={handleOpen} center>
        <div className="w-[750px] gap-6 flex flex-col justify-between">
          <h1 className="text-base font-extraBold text-default">Add Song</h1>
          <FormInput
            label="Song Name"
            onChange={handleInputChange}
            name="name"
            value={formValues.name}
          />
          <FormInput
            label="Song Link"
            onChange={handleInputChange}
            name="link"
            value={formValues.link}
          />
          <FormInput
            label="Song Source"
            onChange={handleInputChange}
            name="source"
            value={formValues.source}
          />
          <Upload onChange={(e) => handleImageChange(e)} />

          {thumbnail.url && (
            <div className="w-full flex justify-between items-center p-2 border-2 ">
              <div className="flex gap-1 items-center ">
                <div className="w-[72px] h-[72px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src={thumbnail?.url}
                  />
                </div>
                <p>{thumbnail?.name}</p>
              </div>
              <MdOutlineDelete
                size="30"
                color="gray"
                onClick={handleDelete}
                className="cursor-pointer"
              />
            </div>
          )}

          <div className="flex gap-2 w-full justify-end">
            <LightButton label="Cancel" onClick={() => {}} />
            <DefaultButton label="Save" onClick={handleAdd} />
          </div>
        </div>
      </Modal>
    </>
  );
};
