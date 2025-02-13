import React from 'react'

export default function JioFiber() {
    return (
        <div>
            {/* <h1>JioFiber</h1> */}
            <div class="container">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://jep-asset.akamaized.net/cms/assets/new-home/exclusive-offer-desktop-5feb.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-firstheading">Exclusive Offer</h5>
                                    <p class="carousel-firstpara">Free Installation worth 1000rs.</p>
                                    <buuton class="carousel-firstbutton">Book Now</buuton>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://jep-asset.akamaized.net/cms/assets/jiofiber/discover/unlimited-desktop-1184x520-feb.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-secondheading">Unlimited BroadBrand for your Home</h5>
                                    <p class="carousel-secondpara">Enjoy upto 1 Gbps internet speed across all devices .</p>
                                    <button class="carousel-secondbutton">Book Now</button>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://jep-asset.akamaized.net/cms/assets/jiofiber/youtube-premium-5feb.webp" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class="carousel-thirdheading">Youtube Premium is FREE for you!</h5>
                                    <p class="carousel-thirdpara">You can enjoy ad free videous ,offline viewing and background play songs.</p>
                                    <button class="carousel-thirdbutton">Explore eligible plans</button>
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
    )
}
