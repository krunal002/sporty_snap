import { useContext } from "react"
import { PostContext } from "../SportySnap"
import { useNavigate } from "react-router-dom";

const FunButttons = (post) => {
    const navigate = useNavigate()
    const postId = post.item._id;
    const { deleteHandler } = useContext(PostContext)
    
    return (
        <div className="fun-button-containet">
        {/* style in index.css */}
            <div className="funBtn" onClick={() => deleteHandler(postId)}><i class="fa fa-trash-o fa-1.5x" aria-hidden="true"></i></div>
            <div className="funBtn" onClick={() => navigate(`/edit-post/${postId}`) }><i class="fa fa-pencil-square-o fa-1.5x" aria-hidden="true"></i></div>
        </div>
    )
}
export default FunButttons;