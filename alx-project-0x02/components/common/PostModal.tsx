import React, { useState } from 'react';
import { PostModalProps } from '@/interfaces';
import { on } from 'events';
const PostModal: React.FC <PostModalProps>= ({ onClose, onSubmit }) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [id, setId] = useState(0);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        onSubmit(id, title, content);
        setTitle('');
        setContent('');
        onClose();
        
    };

    return (
        <div>
            <h1 className="text-2xl font-bold">Post Modal</h1>

            <form 
                onSubmit={handleSubmit}
                className="space-y-4 bg-white p-6 rounded-lg shadow-md m-4"    
            >
                <div>
                    <label htmlFor="id">ID</label>
                    <input
                        type="number"
                        id="id"
                        name="id"
                        onChange={(e) => setId(Number(e.target.value))}
                        value={id}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mt-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                        value={content}
                        rows={4}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div className="mt-4 flex space-x-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                    <button
                         type="button"
                         className="ml-2 inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                         onClick={onClose}
                    >
                         Close
                    </button>
                </div>
               
            </form>
        </div>
    )
}

export default PostModal;