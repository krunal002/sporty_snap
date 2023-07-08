import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PostContext } from "../SportySnap";

const CreatePost = () => {
  const notify = () =>
    toast.warn("Your post is Empty!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const { createPost } = useContext(PostContext);

  const [uploadedPic, setUploadedPic ] = useState("")
  const [contentHandler, setContentHandler] = useState("");

  const clickHandler = () => {
    setContentHandler("");
    contentHandler === "" ? notify() : createPost(contentHandler, uploadedPic);
  };


  const uploadImage = (e) => {
    const file = e.target.files[0]
    const imgUrl = URL.createObjectURL(file);
    setUploadedPic(imgUrl)
    console.log("hjc ", imgUrl)
  }
  return (
    <div className="createPost-container  container-format">
      <ToastContainer />
      <div>
        <img
          src={ uploadedPic==="" ?"https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=360" :uploadedPic}
          alt="userImg"
          className="createPost-image"
        />
        <textarea
          id="text-input"
          rows="8"
          cols="40"
          value={contentHandler}
          onChange={(e) => setContentHandler(e.target.value)}
          placeholder="Create Sporty_snap...."
          className="createPost-textarea"
        ></textarea>
      </div>

      <div className="createPost-bottom">
        <label htmlFor="fileInput" className="file-input-label">
          <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
        </label>
        <input
          type="file"
          id="fileInput"
          className="custom-file-input"
          style={{ display: "none" }}
          onChange={uploadImage}
        />

        <button
          type="submit"
          className="createPost-button"
          onClick={clickHandler}
        >
          Post
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
