import css from "./NotFoundPage.module.css";

function NotFoundPage() {
    console.log({ css });

    return (
        <span className={css.warning}>
            Page not Found
        </span>
    )
}

export default NotFoundPage;
