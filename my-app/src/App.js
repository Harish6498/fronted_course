import logo from './logo.svg';
import './App.css';

function App() {
  // const name = "Harish";
  // const nickName = "HR";
  const detailes = {

    title: "Our Recent MoUs",
    info: ["With JAGADGURU SRI SHIVARATHREESWARA UNIVERSITY, MYSORE, KARNATAKA",
      "With RAXA Academy, Andhra Pradesh", "with JeilhwasungCo. Ltd, Korea",
      "with University of Udine, Italy"
    ]


  }
  const info = {
    title: [
      "SK UNIVERSITY", "PLANNING & ANALYSIS", "CREATIVE IDEAS"
    ]
  }
  const footerInfo={
    footerTitle:"University colleges",
    subTitle:[
      "SKU of Science","SKU of Arts","SKU of Engineering","SKU of Pharmacy"
    ]
  }
  return (
    // <>
    //   <div class="container">
    //     <div class="row">
    //       <div class="col-4">
    //         <div class="card">
    //           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWVLdEW0GABLEcu7Bhua8bktQlcR8cs6jR6IvK3CFiLLxZt4RdFRN_T315oIoPDxemf0&usqp=CAU" class="card-img-top" alt="..." />
    //           <div class="card-body">
    //             <h5 class="card-title">{name}</h5>
    //             <p class="card-text">{nickName}</p>
    //             <a href="#" class="btn btn-primary">Let's Together</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-4">
    //         <div class="card">
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0OXiFkxfqmFzegJNvGOmHgGLb0_5IzEEKWSSr-gjQxo2Pl7THX5ueBgl3GFmojySqS3c&usqp=CAU" class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">{name}</h5>
    //           <p class="card-text">{nickName}</p>
    //           <a href="#" class="btn btn-primary">Let's Together</a>
    //         </div>
    //       </div>
    //       </div>
    //       <div class="col-4">
    //         <div class="card">
    //         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZv9r-w0AXvRerk13ts5Yzpj9_Y3pZj7Ul96QBp4i1EnKFxqVktK8DvibHJ0QPQsTcGJ0&usqp=CAU" class="card-img-top" alt="..." />
    //         <div class="card-body">
    //           <h5 class="card-title">{name}</h5>
    //           <p class="card-text">{nickName}</p>
    //           <a href="#" class="btn btn-primary">Let's Together</a>
    //         </div>
    //       </div>
    //       </div>

    //     </div>
    //   </div>
    // </>
    <>
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">SKU</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">HOME</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ABOUT SKU
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Logo</a></li>
                    <li><a class="dropdown-item" href="#">University</a></li>
                    <li><a class="dropdown-item" href="#">Vision & Mission</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ACADAMICS
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Admissions</a></li>
                    <li><a class="dropdown-item" href="#">Course offered</a></li>
                    <li><a class="dropdown-item" href="#">Syllubus</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ADMINISTARATION
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Chancellor</a></li>
                    <li><a class="dropdown-item" href="#">ViceChancellor</a></li>
                    <li><a class="dropdown-item" href="#">Rector</a></li>
                    <li><a class="dropdown-item" href="#">Rigister</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    RESEARCH
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">R&D Centers</a></li>
                    <li><a class="dropdown-item" href="#">Reaserch Centers</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    COLLEGES
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Contiuent colleges</a></li>
                    <li><a class="dropdown-item" href="#">Affilited colleges</a></li>
                    <li><a class="dropdown-item" href="#">college list</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="http://skuniversity.ac.in/photos/1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{info.title[0]}</h5>

              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="http://skuniversity.ac.in/photos/2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{info.title[1]}</h5>

              </div>
            </div>
            <div class="carousel-item">
              <img src="http://skuniversity.ac.in/photos/3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>{info.title[2]}</h5>

              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <h2 class="h2">{detailes.title}</h2>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <img src="http://skuniversity.ac.in/images/portfolio/thumb/MoU6.JPG" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">{detailes.info[0]}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="http://skuniversity.ac.in/images/portfolio/thumb/MoU5.JPG" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">{detailes.info[1]}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="http://skuniversity.ac.in/images/portfolio/thumb/MoU1.JPG" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">{detailes.info[2]}</p>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <img src="http://skuniversity.ac.in/images/portfolio/thumb/MoU2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">{detailes.info[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  );
}

export default App;
