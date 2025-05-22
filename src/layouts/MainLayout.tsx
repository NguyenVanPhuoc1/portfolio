import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/footer/BackToTop";
// import CucaAnimation from "../components/CucaAnimation";
import { useLoading } from "../LoadingContext";
import "../assets/css/main.css";

interface LayoutProps {
    isDark: boolean;
    setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: React.FC<LayoutProps> = ({ setIsDark, isDark }) => {
    const loading = useLoading();
    return (
        <div className={`app ${isDark ? "bg-dark" : ""} ${!loading ? "loaded" : ""}`} data-is-dark={isDark}>
            <div className="overflow-x-hidden max-w-full">
                <div className="h-auto flex flex-col ">
                    <Header
                        isChecked={isDark}
                        handleChange={() => setIsDark((prev) => !prev)}
                    />
{/*                     <CucaAnimation /> */}
                    <Main />
                    <Footer />
                    {
                        !loading ? <BackToTop /> : ''
                    }
                    {/* <BackToTop /> */}
                </div>
            </div>
        </div>
    );
};
export default MainLayout;
