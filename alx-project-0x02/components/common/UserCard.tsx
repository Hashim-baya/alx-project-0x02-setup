import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return (
        <div className="bg-white shadow-md m-4 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <p className="text-gray-600">@{username}</p>
            <p className="text-gray-600">{email}</p>
            <p className="text-gray-600">Phone: {phone}</p>
            <p className="text-gray-600">Website: {website}</p>
            <div className="mt-4">
                <h3 className="font-semibold">Address:</h3>
                <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">Company:</h3>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
        </div>
    );
}

export default UserCard;