import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import ErrorBoundary from './components/ErrorBoundary.tsx';
import theme from './styles/theme.ts';

// עיצוב רספונסיבי בעזרת MUI
const Home = React.lazy(() => import('./pages/Home.tsx'));
const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage.tsx'));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Router>
          <Container maxWidth="lg">
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
              </Routes>
            </Suspense>
          </Container>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
