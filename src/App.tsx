import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import PageTitle from "./pages/PageTitle";

const Homepage = lazy(() => import("./pages/Homepage"));
const ApplicationPage = lazy(() => import("./pages/ApplicationPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            role="status"
            aria-label="Loading page"
            className="flex min-h-screen items-center justify-center"
          >
            <span className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-brand-purple" />
          </div>
        }
      >
        <PageTitle/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/community-page" element={<CommunityPage />} />
          <Route path="/terms-condition" element={<TermsCondition />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
