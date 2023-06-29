import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditPost = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const token = localStorage.getItem("encodedToken");
  const currUser = JSON.parse(localStorage.getItem("user"));

  // get post data
  const [reqPost, setReqPost] = useState("");

  const { postId } = useParams();
  const getPostData = async () => {
    try {
      const res = await axios.get(`/api/posts/${postId}`);
      const result = res.data.post;
      setReqPost({_id: result._id, img: result.img, category: result.category, content: result.content});
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPostData();
  },[]);

  // set edited data
  const cred = {
    img: reqPost.img,
    category: reqPost.category,
    content: reqPost.content,
}
  const postEditedData = async (c) => {
    
    console.log("cred",cred)
    try {
      await axios.post(
        `/api/posts/edit/${c._id}`,
        { postData: cred },
        {
          headers: { authorization: token },
        }
      );
      navigate(`/profile/${currUser._id}`);
      setShow(false);
    } catch (e) {
      setShow(true);
      console.log(e);
    }
  };

  return (
    <div>
      <div className="login-home-link">
        <Link to="/home">
          <i class="fa fa-home" aria-hidden="true">
            _Home
          </i>
        </Link>
      </div>
      <div className="loginDiv">
        <h1>Edit Post</h1>
        <div className="login-input-div">
          {/* postImage */}
          <div>
            <label className="loginLabels">
              <b>Image : </b>
              <small>(Enter Image link)</small>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={reqPost.img}
              onChange={(e) =>
                setReqPost({...reqPost, img:e.target.value})
              }
            />
          </div>

          <div>
            <img src={reqPost.img} alt="reqPostImage" className="reqPostImage" />
          </div>
          {/* Category */}
          <div>
            <label className="loginLabels">
              <b>Category : </b>
            </label>
            <input
              type="text"
              className="loginInputs"
              value={reqPost.category}
              onChange={(e) =>
                setReqPost({...reqPost, category:e.target.value})
              }
            />
          </div>

          {/* Content */}
          <div>
            <label className="loginLabels">
              <b>Content : </b>
            </label>
            <textarea
              type="text"
              className="loginInputs"
              value={reqPost.content}
              onChange={(e) =>
                setReqPost({...reqPost, content:e.target.value})
              }
            />
          </div>

          <button className="loginBtn" onClick={() => postEditedData(reqPost)}>
            <b>Save</b>
          </button>
          <div
            style={
              show ? {} : { color: "red", textAlign: "center", display: "none" }
            }
          >
            Something is wrong
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditPost;
