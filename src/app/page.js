import Image from "next/image";
import styles from "./page.module.css";
import natureImage from './/nature.jpg';
import lakeImage from './/Lake.jpg';
import TWOImage from './/1.jpg';
import mmImage from './/8.jpg';
import kkImage from './/0.jpg';
import ooImage from './/9.jpg';
import './/globals.css';
import Script from "next/script";
import Link from "next/link";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Nan Province</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">contact</a>
        </li>
      </ul>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <Link href="/signup">
          <button className="btn btn-primary" type="button">
            Sign Up
          </button>
          </Link>
          <Link href="/signin">
          <button className="btn btn-primary me-md-2" type="button">
          Sign In
        </button>
        </Link>
      </div>
    </div>
  </div>
</nav>


      <div className="container">

        <div className="row my-3">
          <div className="col-md-12 text-center bg-success p-5 border rounded">
            <div id="carouselExampleRided" className="carousel Silde" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                <Image src={TWOImage} className="d-clock w-100" alt="two" />
              </div>
              <div className="carousel-item">
              <Image src={mmImage} className="d-clock w-100" alt="mm" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
          </button>
             <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
          </button>
        </div>
            </div>
          </div>

  <div className="d-flex flex-row">
  <div className="card" style={{width: '40rem'}}>
    <Image src={mmImage} className="card-img-top" alt="mm"/>
    <div className="card-body">
      <h5 className="card-title">จังหวัดน่าน</h5>
      <p className="card-text"> จังหวัดน่าน ธรรมชาติบำบัดสถานที่พักผ่อนอันสงบ สถานที่ท่องเที่ยวที่สวยงามดั่งมนต์สะกดที่ผู้คนมากมายต่างสนใจบรรยากาศดีๆ ถ่ายรูปก็สวยน่าดึงดูด</p>
    </div>
  </div>
  <div className="card" style={{width: '40rem'}}>
    <Image src={ooImage} className="card-img-top" alt="oo" />
    <div className="card-body">
      <h5 className="card-title">อาหารพื้นบ้าน</h5>
      <p className="card-text">อาหารพื้นบ้านที่มีรสชาติอร่อยและแปลกตา กินคู่กับบรรยากาศอันสวยงาม</p>
    </div>
  </div>
  <div className="card" style={{width: '40rem'}}>
    <Image src={kkImage} className="card-img-top" alt="kk" />
    <div className="card-body">
      <h5 className="card-title">จุดเช็คอินโฮมสเตย์</h5>
      <p className="card-text">สถานที่พักผ่อน ปลอดภัยนอนหลับสบาย พร้อมตื่นมากับวิวหมอกสวยๆในหน้าหนาว</p>
    </div>
  </div>
</div>

        <div className="row">
        <footer class="bg-success py-3 my-4 border rounded">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">Atchara@2005</p>
  </footer>

            </div>
          </div>

</>
  );
} 