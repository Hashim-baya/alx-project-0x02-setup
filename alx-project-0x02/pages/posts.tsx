import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsProps {
    posts: PostProps[];
}
const Posts: React.FC<PostsProps> = ({ posts }) => {
    console.log("Fetched posts:", posts);

    return (
        <div>
            <Header />
            <main className="p-4 m-4 bg-amber-50  rounded-lg shadow-md">
                <h1>Posts Page</h1>
                <p>This page contains a list of posts.</p>
                <div className="space-y-4">
                    {posts && posts.map((post, index) => (
                        <div>
                            <PostCard key={index} userId={post.userId} title={post.title} body={post.body} id={post.id} />
                        </div>
                    ) )}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return {
        props : {
            posts: posts.slice(0, 20) // Limit to 20 posts for performance
        }
    }
}

export default Posts;