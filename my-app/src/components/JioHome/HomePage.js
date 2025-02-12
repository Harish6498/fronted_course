import React from "react";
import {Link} from 'react-router-dom';

function HomePage() {
    const cardDetailes = [
        {
            heading: "My jio supper charged and better than ever!",
            para: "We have mademy jio easier and more fun! our new design makes your managing your mobile Wi-Fi connections incredibly easy.",
            image: "https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjio-tile2.png"
        },
        {
            heading: "Recharge and payment bills now super easy!",
            para: "We have mademy jio easier and more fun! our new design makes your managing your mobile Wi-Fi connections incredibly easy.",
            image: "https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/myjio-6.webp"
        },
        {
            heading: "Manazing jio services is now breeze!",
            para: "We have mademy jio easier and more fun! our new design makes your managing your mobile Wi-Fi connections incredibly easy.",
            image: "https://c8.alamy.com/comp/2BWM2KK/moscow-russia-1-june-2020-myjio-app-mobile-logo-close-up-on-screen-display-illustrative-editorial-2BWM2KK.jpg"
        },

    ]
    const queryDetailes = [
        {
            queryHeading: "MyJio",

            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
                <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
                <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            </svg>,
            queryPara: "Use voice search to get answers queries"
        },
        {
            queryHeading: "Vouchers",

            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gift" viewBox="0 0 16 16">
                <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z" />
            </svg>,
            queryPara: "Recharge in a single click.Buy and transfor to friends and family members."
        },
        {
            queryHeading: "QR code",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-qr-code" viewBox="0 0 16 16">
                <path d="M2 2h2v2H2z" />
                <path d="M6 0v6H0V0zM5 1H1v4h4zM4 12H2v2h2z" />
                <path d="M6 10v6H0v-6zm-5 1v4h4v-4zm11-9h2v2h-2z" />
                <path d="M10 0v6h6V0zm5 1v4h-4V1zM8 1V0h1v2H8v2H7V1zm0 5V4h1v2zM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8zm0 0v1H2V8H1v1H0V7h3v1zm10 1h-1V7h1zm-1 0h-1v2h2v-1h-1zm-4 0h2v1h-1v1h-1zm2 3v-1h-1v1h-1v1H9v1h3v-2zm0 0h3v1h-2v1h-1zm-4-1v1h1v-2H7v1z" />
                <path d="M7 12h1v3h4v1H7zm9 2v2h-3v-1h2v-1z" />
            </svg>,
            queryPara: "Link accounts save contacts and do much more."
        },
        {
            queryHeading: "Usage Detailes",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-recycle" viewBox="0 0 16 16">
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
            </svg>,
            queryPara: "Check details of voice,data and sms consumption."
        },
        {
            queryHeading: "JioAutoPay",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
                <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
            </svg>,
            queryPara: "Setup jio auto pay and never miss a recharge."
        },
        {
            queryHeading: "JioCare",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-question-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.496 6.033a.237.237 0 0 1-.24-.247C5.35 4.091 6.737 3.5 8.005 3.5c1.396 0 2.672.73 2.672 2.24 0 1.08-.635 1.594-1.244 2.057-.737.559-1.01.768-1.01 1.486v.105a.25.25 0 0 1-.25.25h-.81a.25.25 0 0 1-.25-.246l-.004-.217c-.038-.927.495-1.498 1.168-1.987.59-.444.965-.736.965-1.371 0-.825-.628-1.168-1.314-1.168-.803 0-1.253.478-1.342 1.134-.018.137-.128.25-.266.25h-.825zm2.325 6.443c-.584 0-1.009-.394-1.009-.927 0-.552.425-.94 1.01-.94.609 0 1.028.388 1.028.94 0 .533-.42.927-1.029.927" />
            </svg>,
            queryPara: "Get answers to your quiries."
        },
        {
            queryHeading: "Statement",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
            </svg>,
            queryPara: "View and download account statements for last 180 days."
        },
        {
            queryHeading: "LocationUs",
            logo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>,
            queryPara: "Find the jio store closest to you."
        },
    ]
    return (
        <>
            <div class="container">
                
                <div class="container card-container">


                    <div class="card text-bg-dark">
                        <img src="https://jep-asset.akamaized.net/cms/assets/jioapps/myjio/top-banner-mob.webp" class="card-img bg-image" alt="..." />
                        <div class="card-img-overlay">
                            <h2>My Jio</h2>
                            <h1 class="card-title">Find all some awesomeness of jio in one app! </h1>
                            <h4 class="card-text">Stream,shop,pay and do much more.</h4>
                            <button class="btn">Download</button>

                        </div>

                    </div>


                </div>





                <div class="container">
                    <h1 class="heading">The only app you need!</h1>
                    <p class="para">Manage your accounts,watch movies,play the latest songs,back up data,play games and do much more.</p>
                    <button class="get-btn">Get Now</button>
                </div>

                {
                    cardDetailes.map((copyOfCardDetailes) => {
                        const { image, heading, para } = copyOfCardDetailes
                        return (
                            <>
                                <div class="card mb-3 image-cards">
                                    <div class="row g-0">
                                        <div class="col-md-6">
                                            <img src={image} class="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card-body">

                                                <h2 class="card-text card-heading">{heading}</h2>
                                                <h6 class="card-text"><small class="text-body-secondary">{para}</small></h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="card mb-3 image-cards">
                                    <div class="row g-0">
                                        <div class="col-md-6">
                                            <div class="card-body">

                                                <h2 class="card-text card-heading">{heading}</h2>
                                                <p class="card-text"><small class="text-body-secondary">{para}</small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <img src={image} class="img-fluid rounded-start" alt="..." />
                                        </div>

                                    </div>
                                </div>

                            </>
                        )
                    }
                    )
                }




                <h1 class="smart-heading">Smart app,Smart future</h1>
                <div class="container query-container">
                    <div class="row">
                        {
                            queryDetailes.map((copyOfQueryDetailes) => {
                                const { queryHeading, logo, queryPara } = copyOfQueryDetailes
                                return (
                                    <div class="col-3">
                                        {logo}
                                        <h6 class="smart-heading">{queryHeading}</h6>
                                        <p>{queryPara}</p>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
                <h1 class="smart-heading">
                    Testinomials
                </h1>
                <div class="container query-container">
                    <div class="row">
                        <div class="col-3">
                            <h6 class="smart-jio">since the day i got to know about</h6>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default HomePage