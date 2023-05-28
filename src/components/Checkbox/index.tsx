import React, {FC, useState} from "react";
import './Checkbox.css'

type CheckboxPropType = {
    isChecked?: boolean;
}
const Checkbox: FC<CheckboxPropType> = ({isChecked= false}) => {
    const [checked, setChecked] = useState<boolean>(isChecked);

    const handleOnChange = () => {
        setChecked(!checked)
    };

    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={handleOnChange}/>
        </label>
    );
};

export default Checkbox;
