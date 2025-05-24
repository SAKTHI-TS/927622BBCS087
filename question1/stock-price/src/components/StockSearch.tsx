import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface StockSearchProps {
    onSearch: (symbol: string) => void;
    value: string;
    onChange: (value: string) => void;
}

export const StockSearch = ({ onSearch, value, onChange }: StockSearchProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                fullWidth
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Enter stock symbol (e.g. AAPL)"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="submit">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </form>
    );
};
