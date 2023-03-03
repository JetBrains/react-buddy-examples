interface CheckboxProps {
    label: string
    checked: boolean,
    appearance: 'secondary' | 'primary',
    children: JSX.Element
}

export const Checkbox = (props: CheckboxProps) => {
    return (
        <div>
            <label>
                <input type={"checkbox"} checked={props.checked} value={props.label}/>
                {props.label}
                {props.children}
            </label>
        </div>
    );
};