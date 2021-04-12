import React from 'react';
import Head from 'next/head';
import CookieModal from '../components/presentation/CookieModal';
import { contactRequest } from '../store/services';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import styles from './pages.module.scss';

const ContactForm = () => {
    const defaultData = {
        name: '',
        email: '',
        subject: '',
        message: ''
    };
    const [formData, setFormData] = React.useState(defaultData);
    const [requestStatus, setRequestStatus] = React.useState('idle');
    const { name, email, subject, message } = formData;

    const changeHandler = event => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        });
    };

    const submitHandler = async event => {
        event.preventDefault();
        setFormData({ ...formData });
        setRequestStatus('pending');
        contactRequest(formData)
            .then(response => {
                if (!response.error) {
                    setFormData(defaultData); 
                    setRequestStatus('success');
                } else setRequestStatus('fail');
            })
            .catch(() => setRequestStatus('fail'));
    };

    return (
        <React.Fragment>
            <Head>
                <title>Botter Spotter - Contact Us</title>
                <meta name="robots" content="noindex, nofollow" />
                <meta name="keywords" content="" />
                <meta httpEquiv="author" content="" key="author" />
                <meta name="twitter:card" content="" />
                <meta name="twitter:site" content="" />
                <meta name="description" content="" />
                <meta property="og:title" content="" key="sitetitle" />
                <meta property="og:description" content="" key="sitedescription" />
                <meta property="og:url" content="" key="siteurl" />
                <meta property="og:image" content="" key="siteimage" />
                <meta property="og:site_name" content="" key="sitename" />
            </Head>
            <main>
                <article className={styles.root} aria-labelledby="headline">
                    {requestStatus !== 'success' &&
                        <React.Fragment>
                            <section className={styles.headContent}>
                                <h1 id="headline">Contact Us</h1>
                                <div className={styles.preface}>
                                    <p>We'd love to hear from you. Do you have suggestions? Would you like to report a score that you disagree with? Or maybe you just want to say hello. Use the form below, and we'll get back to you as soon as possible.</p>
                                </div>
                            </section>
                            <section className={styles.contactForm}>
                                <form onSubmit={submitHandler}>
                                    <p>All fields are required.</p>
                                    <fieldset className={styles.formFields}>
                                        <TextField
                                            variant="outlined"
                                            name="name"
                                            placeholder="Name"
                                            required
                                            autoComplete="name"
                                            disabled={requestStatus === 'pending'}
                                            value={name}
                                            className={styles.field}
                                            onChange={changeHandler}
                                        />
                                        <TextField
                                            variant="outlined"
                                            name="email"
                                            placeholder="Email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            disabled={requestStatus === 'pending'}
                                            value={email}
                                            className={styles.field}
                                            onChange={changeHandler}
                                        />
                                        <TextField
                                            variant="outlined"
                                            name="subject"
                                            placeholder="Subject"
                                            required
                                            autoComplete="off"
                                            disabled={requestStatus === 'pending'}
                                            value={subject}
                                            className={styles.field}
                                            onChange={changeHandler}
                                        />
                                        <TextField
                                            variant="outlined"
                                            name="message"
                                            placeholder="Message"
                                            required
                                            multiline
                                            rows={10}
                                            disabled={requestStatus === 'pending'}
                                            value={message}
                                            className={`${styles.field} ${styles.messageField}`}
                                            onChange={changeHandler}
                                        />
                                    </fieldset>
                                    <div className={styles.buttonWrapper}>
                                        <Button
                                            variant="contained"
                                            type="submit"
                                            endIcon={<Icon>send</Icon>}
                                            disabled={requestStatus === 'pending'}
                                            className={styles.button}>
                                            Send
                                        </Button>
                                        {requestStatus === 'pending' &&
                                            <CircularProgress size={24} className={styles.buttonProgress} />
                                        }
                                    </div>
                                </form>
                                {requestStatus === 'fail' &&
                                    <Alert severity="error" variant="filled">
                                        Error. The message was not sent.
                                    </Alert>
                                }
                            </section>
                        </React.Fragment>
                    }
                    {requestStatus === 'success' &&
                        <section className={styles.contactResponse}>
                            <h1>Thank You!</h1>
                            <p>
                                Your message was sent.
                            </p>
                        </section>
                    }
                </article>
            </main>
            <CookieModal />
        </React.Fragment>
    );
};

export default ContactForm;
