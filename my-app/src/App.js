import logo from './logo.svg';
import './App.css';
//  import "./components/portList/portList.css";
// import UniverseList from './components/universeList/universeList';
// import UniverseList2 from './components/universeList/UniverseList2';
import ShivaAnna from './components/shivaList/ShivaAnna.js';
import "./components/shivaList/ShivaAnna.css";


function App() {


  // const detailes = [{

  //   image: "http://skuniversity.ac.in/images/portfolio/thumb/MoU6.JPG",
  //   info: "With JAGADGURU SRI SHIVARATHREESWARA UNIVERSITY, MYSORE, KARNATAKA"
  // },
  // {
  //   image: "http://skuniversity.ac.in/images/portfolio/thumb/MoU5.JPG",
  //   info: "With RAXA Academy, Andhra Pradesh"


  // },
  // {
  //   image: "http://skuniversity.ac.in/images/portfolio/thumb/MoU1.JPG",
  //   info: "with JeilhwasungCo. Ltd, Korea"
  // },
  // {
  //   image: "http://skuniversity.ac.in/images/portfolio/thumb/MoU2.jpg",
  //   info: "with University of Udine, Italy"
  // }];
  // const headings = {
  //   title: [
  //     "SK UNIVERSITY", "PLANNING & ANALYSIS", "CREATIVE IDEAS"
  //   ]
  // }

  // const portDetailes = [
  //   {
  //     heading: "Bandhan ELSS Tax Saver Direct Plan",
  //     button: "SIP",
  //     sub1: "Investment",
  //     sub2: "Current Value",
  //     sub3: "Returns",
  //     amount1: "1.78 Lakh",
  //     amount2: "2.38 Lakh",
  //     amount3: "$59,173.18(+33.10%)"
  //   },
  //   {
  //     heading: "Invesco India ELSS Tax Saver Fund",
  //     button: "SIP",
  //     sub1: "Investment",
  //     sub2: "Current Value",
  //     sub3: "Returns",
  //     amount1: "1.16 Lakh",
  //     amount2: "1.51 Lakh",
  //     amount3: "$35,279.18(+30.39%)"
  //   },
  //   {
  //     heading: "Adithya Birla ELSS Saver Fund",
  //     button: "SIP",
  //     sub1: "Investment",
  //     sub2: "Current Value",
  //     sub3: "Returns",
  //     amount1: 76500.0,
  //     amount2: "1.03 Lakh",
  //     amount3: "$26,941.18(+35.10%)"
  //   },
  //   {
  //     heading: "Axis ELSS Tax Saver Direct Plan",
  //     button: "SIP",
  //     sub1: "Investment",
  //     sub2: "Current Value",
  //     sub3: "Returns",
  //     amount1: 62000.0,
  //     amount2: 81971.69,
  //     amount3: "$19,971.69(+32.16%)"
  //   }

  // ];



  // 

  return (

    <>


      {/* <UniverseList/> */}
      {/* <UniverseList2/> */}
      <ShivaAnna />


      {

        //     <div class="container">
        //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
        //         <div class="container-fluid">
        //             <a class="navbar-brand" href="#">SKU</a>
        //             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="navbarNavDropdown">
        //                 <ul class="navbar-nav">
        //                     <li class="nav-item">
        //                         <a class="nav-link active" aria-current="page" href="#">HOME</a>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             ABOUT SKU
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">Logo</a></li>
        //                             <li><a class="dropdown-item" href="#">University</a></li>
        //                             <li><a class="dropdown-item" href="#">Vision & Mission</a></li>
        //                         </ul>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             ACADAMICS
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">Admissions</a></li>
        //                             <li><a class="dropdown-item" href="#">Course offered</a></li>
        //                             <li><a class="dropdown-item" href="#">Syllubus</a></li>
        //                         </ul>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             ADMINISTARATION
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">Chancellor</a></li>
        //                             <li><a class="dropdown-item" href="#">ViceChancellor</a></li>
        //                             <li><a class="dropdown-item" href="#">Rector</a></li>
        //                             <li><a class="dropdown-item" href="#">Rigister</a></li>
        //                         </ul>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             RESEARCH
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">R&D Centers</a></li>
        //                             <li><a class="dropdown-item" href="#">Reaserch Centers</a></li>
        //                             <li><a class="dropdown-item" href="#">Something else here</a></li>
        //                         </ul>
        //                     </li>
        //                     <li class="nav-item dropdown">
        //                         <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        //                             COLLEGES
        //                         </a>
        //                         <ul class="dropdown-menu">
        //                             <li><a class="dropdown-item" href="#">Contiuent colleges</a></li>
        //                             <li><a class="dropdown-item" href="#">Affilited colleges</a></li>
        //                             <li><a class="dropdown-item" href="#">college list</a></li>
        //                         </ul>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </nav>
        //     <div id="carouselExampleDark" class="carousel carousel-dark slide">
        //         <div class="carousel-indicators">
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        //             <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        //         </div>
        //         <div class="carousel-inner">
        //             <div class="carousel-item active" data-bs-interval="10000">
        //                 <img src="http://skuniversity.ac.in/photos/1.jpg" class="d-block w-100" alt="..." />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>{headings.title[0]}</h5>

        //                 </div>
        //             </div>
        //             <div class="carousel-item" data-bs-interval="2000">
        //                 <img src="http://skuniversity.ac.in/photos/2.jpg" class="d-block w-100" alt="..." />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>{headings.title[1]}</h5>

        //                 </div>
        //             </div>
        //             <div class="carousel-item">
        //                 <img src="http://skuniversity.ac.in/photos/3.jpg" class="d-block w-100" alt="..." />
        //                 <div class="carousel-caption d-none d-md-block">
        //                     <h5>{headings.title[2]}</h5>

        //                 </div>
        //             </div>
        //         </div>
        //         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Previous</span>
        //         </button>
        //         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Next</span>
        //         </button>
        //     </div>

        //     <h2 class="h2">Our Recent MoUs</h2>
        //     <div class="row">
        //         {
        //             detailes.map((copyOfDetailes) => {
        //                 const { image, info } = copyOfDetailes
        //                 return (
        //                     <>
        //                         <div class="col-6">
        //                             <div class="card">
        //                                 <img src={image} class="card-img-top" alt="..." />
        //                                 <div class="card-body">
        //                                     <p class="card-text">{info}</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </>
        //                 )
        //             })
        //         }

        //     </div>
        // </div>
      }


      {/* <div class="container bg-container">
      <h1 class="main-heading">My Portfolio</h1>
        <div class="container heading-cntr">
          
          <div class="row">
            <p>Current Value</p>
            <h4>$7,92,455.32</h4>
            <p>as of jan 292025,11:12 PM</p>
          </div>
        </div>
        <div class="container content-container">
          <div class="row">
            <div class="col-6">
              <p>Invested Amout</p>
              <h6>$6,664,546.21</h6>
            </div>
            <div class="col-6">
              <p>Returns</p>
              <h6>$6,664,546.21</h6>
              <h6>(+19.54%)</h6>
            </div>
          </div>

        </div>


        <div class="viewmore">view more</div>
        <div class="container">
          <h3 class="heading">Portfolio Detailes</h3>
          {
            portDetailes.map((copyOfDetailes) => {
              const { heading, button, sub1, sub2, sub3, amount1, amount2, amount3 } = copyOfDetailes
              return (
                <>
                  <div class="container  container-heading">
                    <h4>{heading}</h4>
                    <button class="btn">{button}</button>
                    <div class="row">
                      <div class="col-3">
                        <p>{sub1}</p>
                        <h6>{amount1}</h6>
                      </div>

                      <div class="col-3">
                        <p>{sub2}</p>
                        <h6>{amount2}</h6>
                      </div>

                      <div class="col-5">
                        <p>{sub3}</p>
                        <h6>{amount3}</h6>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div> */}

    </>


  );

}

export default App;
