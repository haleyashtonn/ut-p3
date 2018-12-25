import React from 'react'

function Footer(){
    return(
        <div>
            <footer className="page-footer teal darken-5">
            <div className="container">
                <div className="row">
                    <div className="col s5 l4 offset-l2">
                        <h3 className="white-text">Follow us!</h3>

                        <ul id="ani-footer-social">
                            <div className="row">
                                <div className="col s3 l2">
                                    <li><a className="white-text text-lighten-3" href="https://github.com/sohai9/Project-2" target="_blank" title="Follow Animals on GitHub!"><i className="fa fa-github-square" aria-hidden="true"></i></a></li>
                                </div>
                                <div className="col s3 l2">
                                    <li><a className="white-text text-lighten-3" href="https://www.facebook.com" target="_blank" title="Follow Animals on Facebook!"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                </div>
                                <div className="col s3 l2">
                                    <li><a className="white-text text-lighten-3" href="https://www.linkedin.com" target="_blank" title="Follow Animals on LinkedIn!"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                </div>
                                <div className="col s3 l2">
                                    <li><a className="white-text text-lighten-3" href="https://www.instagram.com" target="_blank" title="Follow Animals on Instagram!"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                </div>
                                <div className="col s3 l2">
                                    <li><a className="white-text text-lighten-3" href="https://www.twitter.com" target="_blank" title="Follow Animals on Twitter!"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                                </div>
                            </div>
                        </ul>
                    </div>

                    <div className="col s6 offset-s1 l4 offset-l1">
                        <h3 className="white-text">Links</h3>

                        <ul id="ani-footer-links">
                            <li><a className="white-text text-lighten-3" href="/">Home</a></li>
                            {/*{{#if aniId}}*/}
                            <li><a className="white-text text-lighten-3" href="/upload-photos">Compose</a></li>
                            <li><a className="white-text text-lighten-3" href="/animals">Find Animals</a></li>
                            {/*{{/if}}*/}
                            <li><a className="white-text text-lighten-3" href="/meet-ani">Animals</a></li>
                            <li><a className="white-text text-lighten-3" href="/meet-ani-team">Meet Team</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright teal darken-4">
                <div className="container">
                    <div className="center-align">
                        Copyright © 2018 by <a className="lime-text text-lighten-4" href="https://www.linkedin.com/" target="_blank">sohai9</a>, <a className="lime-text text-lighten-4" href="https://www.linkedin.com/in/christian-henry-27a7a7167/" target="_blank">Christian</a>, <a className="lime-text text-lighten-4" href="https://www.linkedin.com/in/pzamoranos/" target="_blank">Ping</a>, <a className="lime-text text-lighten-4" href="https://www.linkedin.com/in/kathryndunphy/" target="_blank">Haley</a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    )
}
export default Footer