import React, { useState } from 'react';
import Card from '@/components/common/Card';
import { Post } from '@/interfaces';
import Header from '@/components/layout/Header';
import PostModal from '@/components/common/PostModal';
const Home: React.FC = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    const handleAddPost = (id: number, title: string, content: string) => {
        const newPost: Post = { id, title, content };
        setPosts([...posts, newPost]);
    }

    return (
        <div>
            <Header />
            <main>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
                    Add Post
                </button>
                <h1>Home Page</h1>
                <Card title='Card 1' content='This is the content of Card 1' />
            </main>

            {isModalOpen && (
                <PostModal onClose={() => setIsModalOpen(false)} onSubmit={handleAddPost} />
            )}
            
            <div className="space-y-4">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-md shadow border m-4 border-gray-200"
                    >
                        <h2 className="text-xl font-semibold">{post.title}</h2>
                        <p className="text-gray-700 mt-2">{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;