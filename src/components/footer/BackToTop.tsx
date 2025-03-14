import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        //tạo hàm
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-3 bg-gray-700 text-white rounded-full shadow-lg transition-opacity cursor-pointer ${
            isVisible ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Back to top"
        >
            <FaArrowUp size={20} />
        </button>
    );
};

export default BackToTop;
