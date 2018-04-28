import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import stylesheet from '../styles/main.scss';

export default ({ children, title }) => (
    <div className="Layout">
        <Head>
            <meta charset="utf-8" />
            <title>{title} | NextJS SCSS Router Express Boilerplate</title>

            <link rel="apple-touch-icon" sizes="180x180" href="/static/images/favicon/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/images/favicon/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/images/favicon/favicon-16x16.png" />
            <link rel="manifest" href="/static/images/favicon/manifest.json" />
            <link rel="mask-icon" href="/static/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700" />
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>

        <div className="App">
            <div className="Nav-wrapper">
                <div className="logo">
                    <h1 onClick={() => Router.push('/')}>your <span className="logo-yellow">header</span></h1>
                </div>
                <ul className="Nav">
                    <li><Link href="/"><a>Home</a></Link></li>
                </ul>
            </div>

            { children }
        </div>
    </div>
)
