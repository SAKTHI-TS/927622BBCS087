import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { HistoricalData } from '../types/stock';

interface StockChartProps {
    data: HistoricalData[];
}

export const StockChart = ({ data }: StockChartProps) => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 12 }}
                    interval="preserveEnd"
                    angle={-45}
                    textAnchor="end"
                />
                <YAxis />
                <Tooltip />
                <Line 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#8884d8" 
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
