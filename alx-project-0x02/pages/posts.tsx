import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4 m-4 bg-amber-50 h-dvh rounded-lg shadow-md">
                <h1>Posts Page</h1>
                <p>This page contains a list of posts.</p>
                {/* Here you can map through your posts data and render them */}
            </main>
        </div>
    );
}

export default Posts;