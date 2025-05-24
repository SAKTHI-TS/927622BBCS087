import { useState } from 'react';
import { Container, Typography, Box, CircularProgress } from '@mui/material';
import { StockSearch } from './components/StockSearch';
import { StockPriceDisplay } from './components/StockPriceDisplay';
import { StockChart } from './components/StockChart';
import { getStockPrice, getHistoricalData } from './services/stockApi';
import type { StockData, HistoricalData } from './types/stock';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [historicalData, setHistoricalData] = useState<HistoricalData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (symbol: string) => {
    setLoading(true);
    setError('');
    try {
      const [stock, history] = await Promise.all([
        getStockPrice(symbol),
        getHistoricalData(symbol)
      ]);
      setStockData(stock);
      setHistoricalData(history);
    } catch (err) {
      setError('Failed to fetch stock data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Stock Price Tracker
        </Typography>
        
        <StockSearch 
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <CircularProgress />
          </Box>
        )}

        {error && (
          <Typography color="error" align="center" sx={{ my: 2 }}>
            {error}
          </Typography>
        )}

        {stockData && !loading && (
          <>
            <StockPriceDisplay data={stockData} />
            <StockChart data={historicalData} />
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
