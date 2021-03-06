import { Link } from "react-router-dom";


function Header()
{
    return (
        <div>
        <div class="top-bar">
        <div class="container-fluid main_container">
            <div class="row align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="logo">
                        <a href="/">
                            <h1>Spoorthy<span>Academy</span></h1>
                        </a>
                    </div>
                </div>
                <div class="col-lg-8 col-md-7 d-none d-lg-block">
                    <div class="row">
                        <div class="col-4">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="far fa-clock"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Opening Hour</h3>
                                    <p>Mon - Sun, 9:00 - 8:00</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="fa fa-phone-alt"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Call Us</h3>
                                    <p>+91 84659 35341 </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="top-bar-item">
                                <div class="top-bar-icon">
                                    <i class="far fa-envelope"></i>
                                </div>
                                <div class="top-bar-text">
                                    <h3>Email Us</h3>
                                    <p>spoorthynavodaya@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div class="nav-bar">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                <a href="#" class="navbar-brand">MENU</a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
  
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto">
                    <a href="/" class="nav-item nav-link">Home </a>
                        <a href="/about" class="nav-item nav-link">About</a>
                        <a href="/course" class="nav-item nav-link">Courses</a>
                        <a href="/sixth" class="nav-item nav-link">Class-6</a>
                        <a href="/ninth" class="nav-item nav-link">Class-9</a>
                        <a href="/faculty" class="nav-item nav-link">Faculty</a>
                        <a href="/scanner" class="nav-item nav-link">Payment</a>
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                        <a href="/register" class="nav-item nav-link">Register</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </div>
    )
}

export default Header;