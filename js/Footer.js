class Footer extends HTMLElement{
        constructor(){
            super()
        }

        connectedCallback(){
            this.innerHTML = `
            <footer>
            <div>
              <div class="footer-logo">
                <img src="../images/logo.png" alt="Music Hub" />
                <p>Music Hub</p>
              </div>
              <div class="quick-links">
                <h3>Quick Links</h3>
                <a href="/index.html">Home</a>
                <a href="library.html">Library</a>
                <a href="#">About Us</a>
              </div>
              <div class="quick-links">
                <h3>Quick Links</h3>
                <a href="search.html">Search</a>
                <a href="playlist.html">Playlist</a>
              </div>
              <div class="quick-links">
                <h3>Quick Links</h3>
                <a href="player.html">Player</a>
                <a href="#">Register</a>
              </div>
              <div class="social-links">
                <h3>Social Links</h3>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
            </div>
            <div>
              <p>CopyRights &copy; 2023. All Rights Reserved</p>
            </div>
          </footer>
            `
        }
}

customElements.define('footer-element', Footer);