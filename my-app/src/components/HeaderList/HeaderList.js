import React from "react";
import {Link} from "react-router-dom";

function HeaderList(){
    return(
        <div class="container nav-container">
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">MyJio</a>
                                    <button class="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                        <ul class="navbar-nav">
        
                                            <li class="nav-item">
                                                <Link to="MobileList">
                                                    <a class="nav-link active" aria-current="page">Mobile</a>
                                                </Link>
        
        
                                            </li>
        
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">True5g</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">JioFiber</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">AirFiber</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Business</a>
                                            </li>
        
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
    )
}
export default HeaderList