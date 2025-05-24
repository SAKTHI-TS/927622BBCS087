import axios from 'axios';
import { StockData, HistoricalData } from '../types/stock';

// Note: In a real application, you would use a real stock API
// This is a mock implementation for demonstration
export const getStockPrice = async (symbol: string): Promise<StockData> => {
    // Simulate API call with mock data
    return {
        symbol: symbol.toUpperCase(),
        price: Math.random() * 1000 + 100,
        change: Math.random() * 10 - 5,
        changePercent: Math.random() * 5 - 2.5,
        companyName: `${symbol.toUpperCase()} Corporation`
    };
};

export const getHistoricalData = async (symbol: string): Promise<HistoricalData[]> => {
    // Generate mock historical data for the last 30 days
    const data: HistoricalData[] = [];
    const today = new Date();
    
    for (let i = 30; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        data.push({
            date: date.toISOString().split('T')[0],
            price: Math.random() * 1000 + 100
        });
    }
    
    return data;
};
