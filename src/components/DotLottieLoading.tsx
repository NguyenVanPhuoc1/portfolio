import "../assets/css/dolottie.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LoadingScreen = () => {
    return (
        <div className="flex items-center justify-center text-center h-screen">
            <div className="size-45 zoom-animation">
                <DotLottieReact
                src="https://lottie.host/a8e4f374-4cd9-46e0-855e-821cae97cf15/qmyQSyZxpo.lottie"
                loop
                autoplay
                />
            </div>
        </div>
    );
};

export default LoadingScreen;
