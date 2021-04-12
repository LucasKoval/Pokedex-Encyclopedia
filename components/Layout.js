import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="bg-chillyellow">

            <main>
                {children}
            </main>

            <Footer />
            
        </div>
    );
}

export default Layout;