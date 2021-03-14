import React from 'react';
import CookieConsent from 'react-cookie-consent';
import Link from './Link';
import styles from './CookieModal.module.scss';

const CookieConsentModal = () => {
    return (
        <div className={styles.root}>
            <CookieConsent
                containerClasses={styles.cookieConsent}
                contentClasses={styles.contentWrapper}
                buttonWrapperClasses={styles.buttonWrapper}
                location="bottom"
                buttonText="Accept"
                cookieName="botterppotterconsent"
                overlay={true}
                expires={150}>
                <h3>
                    We Use Cookies
                </h3>
                <p>
                    By clicking the Accept button, you agree to our and our parter's use of cookies and other technologies to process your data to personalise your experience and deliver tailored advertising to you, on and off our site.
                </p>
                <p>
                    To find out more, please read our <Link href={'/terms-of-service'}>privacy policy</Link>.
                </p>
            </CookieConsent>
        </div>
    );
};

export default CookieConsentModal;
