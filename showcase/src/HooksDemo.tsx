import {useEffect, useState} from "react";

export const HooksDemo = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/api/users');
    }, []);

    return (
        <div>

        </div>
    )

}