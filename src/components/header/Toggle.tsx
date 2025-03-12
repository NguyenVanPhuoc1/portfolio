import "../../assets/css/Toggle.css";
import { Switch, FormControlLabel } from "@mui/material";


interface ToggleProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {
    return (
        <FormControlLabel
            control={<Switch checked={isChecked} onChange={handleChange} color="warning"/>}
            label="Dark Mode"
        />
    );
};
