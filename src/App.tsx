import { useState, useEffect } from "react";
// import LoadingSphere from "./components/LoadingSphere"; // Import component đã tạo
// import  DotLottieLoading  from "./components/DotLottieLoading";
// import ParticleSphere from './components/ParticleSphere';
import MainLayout from "./layouts/MainLayout";
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import LoadingProvider from "./LoadingContext";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  // Tạo theme cho MUI
  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light", // Chuyển đổi Light/Dark mode
    },
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập quá trình loading trong 4 giây
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Tự động đổi màu nền theo theme */}
      <LoadingProvider value={loading}>
        <div className=" h-full w-screen dark:bg-gray-900 ">
            <MainLayout isDark={isDark} setIsDark={setIsDark} />

          {/* {loading ? (
            <ParticleSphere />
          ) : (
            <MainLayout isDark={isDark} setIsDark={setIsDark} />
          )} */}
        </div> 
      </LoadingProvider>
    </ThemeProvider>
  );
}
