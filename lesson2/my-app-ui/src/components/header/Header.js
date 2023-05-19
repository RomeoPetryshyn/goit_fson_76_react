import './Header.css';
import clsx from 'clsx';

function Header() {
    const isActive = false;
    // clsx('foo', true && 'bar', 'baz');

    const classNames = clsx('container', isActive && 'is-active');
    const classNames1 = clsx('container', { test: isActive }); // same as line 14

    return (
        // <div className={`container ${isActive ? 'is-active' : ''}`}>
        <div className={classNames}>
            {/* <div className={`${isActive ? 'test' : ''}`}>sdfds</div> -- same as line 9 */}
            {/* <div className={classNames1}>sdfsd</div> */}
            <span className={"title"}>I am header</span>
            <span className={"navigation"}>I am navigation</span>
        </div>
    )
}

export default Header;
