
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { useErrorStore } from "../../hooks/stores";

const ErrorBox = () => {
    const error = useErrorStore((state) => state.error);

    return (
            error &&
            <section className="error-box">
                <FontAwesomeIcon icon={faWarning}/> {error}
            </section>
    )
}

export default ErrorBox;