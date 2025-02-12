import React,{useState} from "react";



function MobileList() {
    const [number,updateNumber]=useState("9959136498");

    function getTypedValue(receivedValue){
        console.log(receivedValue.target.value);
        updateNumber(receivedValue.target.value)

    }
    return (
        <div class="container">
            <div class="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Mobile</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Prepaid</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Postpaid</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">InternationalServices</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">eSim</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Recharge</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="container">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://jep-asset.akamaized.net/cms/assets/mobile/discover/annual-plan.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-firstheading">Maximum Saving with
                                        Annual plan</h5>
                                    <p class="carousel-firstpara">Talk,text and surf non stop</p>
                                    <buuton class="carousel-firstbutton">Recharge Now</buuton>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://jep-asset.akamaized.net/cms/assets/home/iactivate-banner-desktop.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-secondheading">Get your Jio sim no time!</h5>
                                    <p class="carousel-secondpara">Now order your Jio sim and activate it your time in anytime,anyware.</p>
                                    <button class="carousel-secondbutton">Get Jio sim</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://jep-asset.akamaized.net/cms/assets/mobile/discover/new-plan-mdisc-desktop.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-thirdheading">Premium entertainement,incredible price!</h5>
                                    <p class="carousel-thirdpara">Get a jio Tv plan for just 445rs.</p>
                                    <button class="carousel-thirdbutton">Recharge Now</button>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="container">
                <h1 class="rechargeHeading">Recharge or Pay Bills</h1>
                <div class="container inputContainer">
                    <label class="labelHeading">Enetr a Number</label>
                    {/* <div>{number}</div> */}
                    <input type="text" onChange={getTypedValue}/>
                    <button class="rechargeBtn">Recharge</button>
                </div>
            </div>
        </div>
    )
}
export default MobileList
