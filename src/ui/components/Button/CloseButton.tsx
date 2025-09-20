interface CloseButtonProps {
  onClick: () => void;
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      className="text-secondary-900 hover:text-accent-500 absolute top-8 right-4 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
}
