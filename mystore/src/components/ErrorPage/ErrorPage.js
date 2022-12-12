import { ErrorOutline } from "@mui/icons-material";
import { useRouteError } from "react-router-dom";
import styles from './ErrorPage.module.css';
const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className={styles['error-page']}>
            <div className={styles.error}>
            <ErrorOutline fontSize="large"/>
            <h3>Sorry, an unexpected error has occurred</h3>
            <p>{error.statusText}</p>
            </div>
        </div>

    )
};

export default ErrorPage;