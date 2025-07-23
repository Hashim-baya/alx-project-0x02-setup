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