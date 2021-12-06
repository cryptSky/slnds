
const footer= () => (
  <footer className="footer-light">

            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <span className="copy">&copy; Copyright 2021 - Solenoids</span>
                                    </span>
                                </div>
                                <div className="de-flex-col">
                                    <div className="social-icons">                                        
                                        <span onClick={()=> window.open("https://twitter.com/SolenoidsNFT", "_target")}><i className="fab fa-twitter fa-2x"></i></span>
                                        <span onClick={()=> window.open("https://discord.gg/UYxrby2ZmF", "_target")}><i className="fab fa-discord fa-2x"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;