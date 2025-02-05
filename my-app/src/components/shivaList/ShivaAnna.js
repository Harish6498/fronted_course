import React from 'react'
function ShivaAnna() {

    const fullDetailes = [
        {

            image: "https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_100_100/B56ZRK8L9qGsAY-/0/1736424080413?e=1744243200&v=beta&t=6BDoQWI347rMJbziYOHKTnI7GXnjt-kgpVeDBUiTcDc",
            heading: "Shiva Kumar",
            para1: "Frontend Engineer Specializiang in MERN/MEAN Stack|Creating Innovative Sllutions..",
            para2: "2d",
            heading2: "🔥 LISTEN UP, YOUNG DEVS: A REAL TALK ABOUT AI & CAREERS 🔥",
            heading3: "Look, I'm tired of all this AI drama. Let me tell you what's really up 👇",
            second: "Comment",
            first: "Like",
            third: "Repost",
            fourth: "Send"
        },
        {
            image: "https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_100_100/B56ZRK8L9qGsAY-/0/1736424080413?e=1744243200&v=beta&t=6BDoQWI347rMJbziYOHKTnI7GXnjt-kgpVeDBUiTcDc",
            heading: "Shiva Kumar",
            para1: "Frontend Engineer Specializiang in MERN/MEAN Stack|Creating Innovative Sllutions..",
            para2: "4d.Edited",
            heading2: "🔥 WHY SOUTH INDIAN TECH EDUCATION IS FAILING US IN 2025 🔥",
            heading3: "Look, I'm tired of all this AI drama. Let me tell you what's really up 👇",
            second: "Comment",
            first: "Like",
            third: "Repost",
            fourth: "Send"
        },
        {
            image: "https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_100_100/B56ZRK8L9qGsAY-/0/1736424080413?e=1744243200&v=beta&t=6BDoQWI347rMJbziYOHKTnI7GXnjt-kgpVeDBUiTcDc",
            heading: "Shiva Kumar",
            para1: "Frontend Engineer Specializiang in MERN/MEAN Stack|Creating Innovative Sllutions..",
            para2: "5d.Edited",
            heading2: "🔥 LISTEN UP, YOUNG DEVS: A REAL TALK ABOUT AI & CAREERS 🔥",
            heading3: "As someone who grew up in the system and now interviews freshers,here's..",
            second: "Comment",
            first: "Like",
            third: "Repost",
            fourth: "Send"


        }


    ]
    return (
        <>

            <div class="container first-container">
                <div class="row">
                    <div class="col-3 image">
                        <img src="https://media.licdn.com/dms/image/v2/D5603AQFxWY-DTwxRbw/profile-displayphoto-shrink_200_200/B56ZRK8L9qGsAc-/0/1736424080393?e=1744243200&v=beta&t=96faAJCH3JWEdSe3NePRuMV1FcSJvULzqV5FuqvyJdg" class="img-thumbnail" alt="..." />
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <h2>Shiva Kumar</h2>
                            <p>Frontend Engineer Specilizing in MERN/MEAN Stack|Creating....</p>
                            <p>Bengaluru</p>
                            <p>4k Followers</p>
                            <div class="row">
                                <div class="col-3">
                                    <button class="message">Message</button>

                                </div>
                                <div class="col-5">
                                    <button class="viewMore">View Full Profile</button>

                                </div>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

            {
                fullDetailes.map((copyOfFullDetailes) => {
                    const { image, heading, para1, para2, heading2, heading3, first, second, third, fourth } = copyOfFullDetailes
                    return (
                        <>
                            <div class="container second-container">



                                <div class="row">
                                    <div class="col-2">
                                        <img src={image} class="img-thumbnail" alt="..." />
                                    </div>
                                    <div class="col-10">
                                        <h6>{heading}</h6>
                                        <p>{para1}</p>
                                        <p>{para2}</p>
                                    </div>
                                    <h5>{heading2}</h5>
                                    <h6>{heading3}</h6>
                                    <p>_________________________________________________________________________________________________</p>
                                    <div class="row">
                                        <div class="col-3">
                                            <p>{first}</p>
                                        </div>
                                        <div class="col-3">
                                            <p>{second}</p>
                                        </div>
                                        <div class="col-3">
                                            <p>{third}</p>
                                        </div>
                                        <div class="col-3">
                                            <p>{fourth}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                })

            }

        </>
    )
}
export default ShivaAnna