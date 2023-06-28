import { useContext } from "react"
import { PostContext } from "../SportySnap"
import { useNavigate } from "react-router-dom";

const FunButttons = (post) => {
    const navigate = useNavigate()
    const postId = post.item._id;
    const { deleteHandler } = useContext(PostContext)
    
    return (
        <div className="fun-button-containet">
            <button onClick={() => deleteHandler(postId)}>Delete</button>
            <button onClick={() => navigate(`/edit-post/${postId}`) }>Edit</button>
        </div>
    )
}
export default FunButttons;