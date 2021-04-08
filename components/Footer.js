import React from 'react';

function Footer() {
    return (
        <footer class="shadow-lg">
            
            <nav class="navbar navbar-light py-5 mt-5 border-top border-2">
                
                <div class="container-fluid justify-content-center mb-3">
                    <span class="mb-0 h5">Pokedex Challenge 2021</span>
                </div>

                <div class="container-fluid justify-content-center mb-3">
                    <span>Lucas Koval | Full Stack Developer</span>
                </div>

                <div class="container-fluid justify-content-center">
                
                    <a href="https://lucaskovaldev.com/" target="_BLANK" title="Portfolio">
                        <img src="/static/icons/pf.svg" alt="Portfolio" style={{width: '40px'}} />
                    </a>

                    <a href="https://www.linkedin.com/in/lucaskoval/" target="_BLANK" className="ms-4 me-4" title="LinkedIn">
                        <img src="/static/icons/li.svg" alt="LinkedIn" style={{width: '35px'}} />
                    </a>

                    <a href="https://github.com/LucasKoval" target="_BLANK" title="GitHub">
                        <img src="/static/icons/gh.png" alt="GitHub" style={{width: '39px'}} />
                    </a>
                
                </div>

            </nav>
        </footer>
    );
}

export default Footer;