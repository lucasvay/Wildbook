import React from "react";
import { FormattedMessage } from "react-intl";
import ProgressBar from "../../components/ProgressBar";

export default function Progress({ 
    name, 
    encounters, 
    progress, 
    children,
    href,
    style,
    disabled = false,
    noUnderline = false,
    external = false,
    newTab = false,
    onClick,
    ...rest }) {

    const styles = {
        color: disabled ? 'grey' : 'unset',
        textDecoration: noUnderline ? 'none' : 'underline',
        cursor: disabled ? 'default' : 'pointer',
        ...style,
      };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: '10px',
        }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                width: '70%',
            }}>
                
                <a 
                    href={href}
                    target={newTab ? "_blank" : "_self"} 
                    rel="noopener noreferrer"
                    className={`text-decoration-${noUnderline ? 'none' : 'underline'} ${disabled ? 'text-muted' : ''}`}
                    style={{                        
                        color: styles.color, 
                        cursor: styles.cursor, 
                    }}
                >
                    <h5>{name}</h5>
                    <span>{encounters} <FormattedMessage id='ENCOUNTERS'/></span>
                </a>
            </div>            
            <ProgressBar progress={progress}/>
        </div>
    );
}
