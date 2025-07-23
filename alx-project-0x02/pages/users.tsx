import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header"
import { UserProps } from "@/interfaces";

interface UsersProps {
    users: UserProps[];
}
const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            <Header />
            <main className="p-4 m-4 bg-amber-50 rounded-lg shadow-md">
                <h1>Users Page</h1>
                <p>This page lists all users of the application.</p>

                <div className="space-y-4">
                    {users && users.map((user, index) => (
                        <div key={index}>
                            <UserCard name={user.name} username={user.username} email={user.email} address={user.address} phone={user.phone} website={user.website} company={user.company} id={0} />
                        </div>
                    ))}
                </div>
                
            </main>
        </div>
    )
}

export async function getStaticProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props : {
            users: users.slice(0, 20) // Limit to 20 users for performance
        }
    }
}

export default Users;