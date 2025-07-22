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