export interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    companyName: string;
}

export interface HistoricalData {
    date: string;
    price: number;
}
