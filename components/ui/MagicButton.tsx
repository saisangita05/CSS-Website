import React from 'react';

type MagicButtonProps = {
    title: string;
    icon: React.ReactNode;
    position: 'left' | 'right';
    handleClick?: () => void;
    otherClasses?: string;
};

const MagicButton: React.FC<MagicButtonProps> = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses = '',
}) => {
    return (
        <>
            <style>
                {`
                    @keyframes shimmer {
                        from {
                            background-position: 0 0;
                        }
                        to {
                            background-position: -200% 0;
                        }
                    }
                `}
            </style>
            <button
                className={`inline-flex gap-2 h-12 w-4/6 items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#4d3861,45%,#a6a1a5,55%,#4d3861)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
                style={{
                    animation: 'shimmer 2s linear infinite',
                }}
            >
                {position === 'left' && icon}
                <span className="mx-2">{title}</span>
                {position === 'right' && icon}
            </button>
        </>
    );
}

export default MagicButton;
