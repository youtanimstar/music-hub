class Header extends HTMLElement {
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = 
        `
        <nav class="navbar">
        <a href="../index.html">
          <div class="logo-seciton">
            <a href="/" ><img src="../images/logo.png" alt="logo" /></a>
            <h1>Music Hub</h1>
          </div>
        </a>
        <ul>
          <li>
            <a href="../index.html">
              <span class="icon"
                ><i class="fa-solid fa-house-chimney"></i
              ></span>
              <span class="title">Home</span>
            </a>
          </li>
          <li>
            <a href="../dist/search.html">
              <span class="icon"><i class="fa-solid fa-compass"></i></span>
              <span class="title">Search</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa-solid fa-folder"></i></span>
              <span class="title">Library</span>
            </a>
          </li>
          <li>
            <a href="./aboutus.html">
              <span class="icon"><i class="fa-solid fa-folder"></i></span>
              <span class="title">About Us</span>
            </a>
          </li>
        </ul>
        <div class="user-section">
          <ul>
            <li>
                <a href="./register.html" id="myBtn">Register</a>
              <a href="./login.html" id="myBtn">Login</a>
            </li>
          </ul>
          <div class="profile"></div>
        </div>
      </nav>
        
        `
    
    }
    
}

customElements.define('header-element', Header)