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

  const [contentHandler, setContentHandler] = useState("");

  const clickHandler = () => {
    setContentHandler("");
    contentHandler === "" ? notify() : createPost(contentHandler);
  };
  
  return (
    <div className="createPost-container  container-format">
      <ToastContainer />
      <div>
        <img
          src="https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?w=360"
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
      <button
        type="submit"
        className="createPost-button"
        onClick={clickHandler}
      >
        Post
      </button>
    </div>
  );
};
export default CreatePost;
