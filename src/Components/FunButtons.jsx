import { useContext } from "react"
import { PostContext } from "../SportySnap"

const FunButttons = (post) => {
    const postId = post.item._id;
    const { deleteHandler } = useContext(PostContext)
    // Functions
    
    const editHandler = () => {
        console.log("this is edit!", postId)
    }
    return (
        <div className="fun-button-containet">
            <button onClick={() => deleteHandler(postId)}>Delete</button>
            <button onClick={editHandler}>Edit</button>
        </div>
    )
}
export default FunButttons;