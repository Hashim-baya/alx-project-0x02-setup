export interface CardProps {
    title: string;
    content: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (id: number, title: string, content: string) => void;
}

export interface Post {
    id: number;
    title: string;
    content: string;
}

export interface ButtonProps {
    label: string;
    className?: string;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}

export interface PostProps {
    userId: number;
    title: string;
    body: string;
    id: number;
}

export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo:Geolocation;
}

export interface Geolocation {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}