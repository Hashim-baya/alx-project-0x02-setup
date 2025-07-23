import { type ButtonProps } from "@/interfaces"

const sizeClasses = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-5 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};
const Button: React.FC<ButtonProps> = ({ label, className, onClick, size, shape }) => {
    return (
        <button
             className={`bg-blue-500 text-white hover:bg-blue-400 cursor-pointer px-4 py-2 ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
        >
            {label}
        </button>
    )
}

export default Button;