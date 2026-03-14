import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

const App = () => {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error('sssss')
  }, [])

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense i18nIsDynamicList fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
