import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, body, id }) => {
    return (
        <div className="bg-white shadow-md m-4 rounded-lg p-6">
            <p className="text-sm text-gray-500">Post ID: {id}</p>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-700">{body}</p>
            <p className="text-sm text-gray-500">User ID: {userId}</p>
        </div>
    );
}

export default PostCard;