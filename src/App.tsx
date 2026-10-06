import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Homepage = lazy(() => import("./pages/Homepage"));
const ApplicationPage = lazy(() => import("./pages/ApplicationPage"));
const CommunityPage = lazy(() => import("./pages/CommunityPage"));
const TermsCondition = lazy(() => import("./pages/TermsCondition"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div role="status" className="p-4">Loading page...</div>}>
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
