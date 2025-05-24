import { Card, Typography, Box } from '@mui/material';
import { StockData } from '../types/stock';

interface StockPriceDisplayProps {
    data: StockData;
}

export const StockPriceDisplay = ({ data }: StockPriceDisplayProps) => {
    const isPositive = data.change >= 0;
    
    return (
        <Card sx={{ padding: 2, marginY: 2 }}>
            <Typography variant="h5" gutterBottom>
                {data.companyName} ({data.symbol})
            </Typography>
            <Typography variant="h4" component="div">
                ${data.price.toFixed(2)}
            </Typography>
            <Box sx={{ 
                color: isPositive ? 'success.main' : 'error.main',
                display: 'flex',
                alignItems: 'center',
                gap: 1
            }}>
                <Typography variant="h6">
                    {isPositive ? '+' : ''}{data.change.toFixed(2)}
                </Typography>
                <Typography variant="body1">
                    ({isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%)
                </Typography>
            </Box>
        </Card>
    );
};
