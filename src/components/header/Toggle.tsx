import "../../assets/css/Toggle.css";
import { Switch, FormControlLabel } from "@mui/material";
import SkeletonLoading from "../SkeletonLoading";
import { useLoading } from '../../LoadingContext';

interface ToggleProps {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isChecked: boolean;
}

const Toggle: React.FC<ToggleProps> = ({ handleChange, isChecked }) => {

    const loading = useLoading();

    return loading ? (
        <SkeletonLoading className="!w-[150px] h-full"/> ) : (
        <FormControlLabel
            control={<Switch checked={isChecked} onChange={handleChange} color="warning"/>}
            label="Dark Mode"
        />
    );
};

export default Toggle;
