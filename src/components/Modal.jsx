import { useEffect } from 'react';
import { MdOutlineClose } from "react-icons/md";

function Modal(props) {
    const obj = props;
    const { open, onClose, children } = obj;

    const esc = (e) => {
        if (e.keyCode === 27) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener('keydown', esc);

        return () => {
            document.body.removeEventListener('keydown', esc);
        };
    });

    return (
        // backdrop
        <div
            onClick={onClose}
            className={`
                fixed inset-0 z-60 w-full h-full flex text-center justify-center items-center transition-colors
                ${open ? "visible bg-black/60" : "invisible"}
                `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                    transition-all
                    ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className='absolute top-1 right-1'
                >
                    <MdOutlineClose />
                </button>
                {children}
            </div>
        </div >
    )
}

export default Modal;