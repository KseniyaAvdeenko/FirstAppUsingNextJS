import styles from './Components.module.sass'
import Heading from "./Heading";
import {FC} from "react";
import {IContact} from "./IComponents";


const ContactInfo: FC<{contact: IContact }> = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city} = address || {}

    if(!contact)return (<div>Empty contact</div>)
    return (
        <div className={styles.contactWrapper}>
            <Heading heading={name}/>
            <div className={styles.contactWrapper__item}>{email}</div>
            <div className={styles.contactWrapper__item}>{street}, {suite}, {city}</div>
        </div>
    );
};

export default ContactInfo;
