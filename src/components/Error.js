import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>OOPs!</h1>
            <h2>Something went wrong happend</h2>
            <h2>{error.statusText}</h2>
        </div>
    )
}

export default Error;