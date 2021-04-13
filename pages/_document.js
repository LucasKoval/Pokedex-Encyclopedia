import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
    static async getInitialProps(context) {
        const initialProps = await Document.getInitialProps(context);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <title className="text-capitalize">Pokedex Challenge</title>
                    <link rel="icon" href="/static/icons/pokeball-2.png" />
                    <html lang="en" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}