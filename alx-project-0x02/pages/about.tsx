import Button from "@/components/common/Button";
const About: React.FC = () => {
    return (
        <div>
            <h1>About Page</h1>
            <p>This page contains information about our application.</p>
            <div className="flex space-x-4 m-4">
                <Button label="Click Me" className="rounded-sm w-[150]" />
                <Button label="Click Me" className="rounded-md w-[250]" />
                <Button label="Click Me" className="rounded-full w-[350]" />
            </div>
           
        </div>
    );
}

export default About;