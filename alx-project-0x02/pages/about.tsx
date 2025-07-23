import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
const About: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="p-4 m-4 bg-amber-50 h-dvh rounded-lg shadow-md">
                <h1>About Page</h1>
                <p>This page contains information about our application.</p>
                <div className="flex space-x-4 m-4">
                    <Button label="Click Me" className="rounded-sm w-[150] " size="small" shape="rounded-sm"   />
                    <Button label="Click Me" className="rounded-md w-[250]" size="medium" shape="rounded-md" />
                    <Button label="Click Me" className="rounded-full w-[350]" size="large" shape="rounded-full" />
                </div>
            </main>
            
           
        </div>
    );
}

export default About;