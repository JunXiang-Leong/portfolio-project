import classNames from 'classnames';
import styles from './contact.module.scss';

export interface ContactProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Contact = ({ className }: ContactProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h2>Contact Me</h2>
            <p>You can contact me at my email: leongjunxiang1@gmail.com</p>
        </div>
    );
};
