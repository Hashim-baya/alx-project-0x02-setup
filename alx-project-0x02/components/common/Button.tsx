import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ label, className, onClick }) => {
    return (
        <button
             className={`bg-blue-500 text-white hover:bg-blue-400 cursor-pointer px-4 py-2  ${className}`}
        >
            {label}
        </button>
    )
}

export default Button;