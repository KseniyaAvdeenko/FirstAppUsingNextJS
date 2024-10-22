import React, {FC} from 'react';
import Head from "next/head";
import {ISocial} from "./IComponents";


const Socials: FC<{socials: ISocial[]}> = ({socials}) => {
    if (!socials) return null
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.0/css/all.css" />
            </Head>

            <div>
                {socials && socials.map(({id, icon, path})=> (
                    <a key={id} href={path} target="_blank" style={{margin: '0 1rem'}}>
                        <i className={'fab fa-'+ icon} style={{color: 'teal'}} aria-hidden='true'/>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Socials;
