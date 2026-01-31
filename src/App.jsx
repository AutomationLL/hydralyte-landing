import React from 'react';
import Navbar from './components/Navbar';
import TopBanner from './components/TopBanner';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import DehydrationQuiz from './components/DehydrationQuiz';
import Features from './components/Features';
import Comparison from './components/Comparison';
import Challenge from './components/Challenge';
import Science from './components/Science';
import Ingredients from './components/Ingredients';
import UseCases from './components/UseCases';
import Reviews from './components/Reviews';
import Offers from './components/Offers';
import FAQ from './components/FAQ';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';
import ExitIntentPopup from './components/ExitIntentPopup';
import ErrorBoundary from './components/ErrorBoundary';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="min-h-screen bg-white text-right" dir="rtl">
      <SpeedInsights />
      <Analytics />
      <TopBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ErrorBoundary>
          {/* Quiz Moved to Hero Section */}
        </ErrorBoundary>
        <Challenge />
        <Features />
        <Comparison />
        <Science />
        <Ingredients />
        <UseCases />
        <Reviews />
        <Offers />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <ErrorBoundary>
        <ExitIntentPopup />
      </ErrorBoundary>
    </div>
  );
}

export default App;
