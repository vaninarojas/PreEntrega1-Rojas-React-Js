import {CartWidget} from "../CartWidget/CartWidget"

export const NavBar = () => {
  return (
    <div className="d-flex justify-content-around mt-2 p-4">
   <img class="rounded" src="/img/vrjoyas.jpg" alt="" style={{width: "150px"}} />
   <nav class="navbar navbar-expand-lg bg-beige ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HOME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="#">ANILLOS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">PULSERAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CADENAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">AROS</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<CartWidget />
    </div>
  )
}

