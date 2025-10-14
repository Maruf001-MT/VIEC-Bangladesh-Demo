class HeaderTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
     <div data-animation="over-left" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-doc-height="1" role="banner" class="navbar w-nav">
        <div class="nav-container w-container">
            <div class="nav-menu-wrapper"><a href="/" aria-current="page" class="brand w-nav-brand w--current"><img src="../assets/img/logo.svg" loading="lazy" alt="Logo" height="Auto" class="logo"/></a>
                <nav
                    role="navigation" class="nav-menu w-nav-menu">
                    <div class="tablet-menu"><a href="/" aria-current="page" class="brand-tablet w-nav-brand w--current"><img src="../assets/img/logo.svg" loading="lazy" alt="Logo" height="Auto" class="logo"/></a>
                        <div
                            class="close-menu-button w-nav-button"><img src="https://cdn.prod.website-files.com/685132432d006ede770341e7/685132432d006ede770344a1_close-btn.svg" loading="lazy" alt="icon" class="nav-close-icon" /></div>
            </div>
            <div class="menu-wrap">
                <a href="/" class="nav-link w-nav-link">Home</a>
                <a href="../about-us" class="nav-link w-nav-link">About Us</a>
                <div data-hover="true" data-delay="0" data-w-id="835e7a36-0bd9-c0ee-0eee-ba31bc15d1f8" class="nav-dropdown w-dropdown">
                    <div class="nav-dropdown-toggle w-dropdown-toggle">
                        <div class="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                        <p class="nav-item-title">Destinations</p>
                    </div>
                    <nav class="nav-dropdown-list w-dropdown-list">
                        <div class="nav-dropdown-link-wrapper"><a href="../destinations" aria-current="page" class="nav-dropdown-link w-dropdown-link w--current"><span class="nav-dropdown-link-dot"> </span>Australia</a><a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>Canada</a>
                            <a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>Malaysia</a>
                            <a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>New Zealand</a>
                            <a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>Singapore</a>
                            <a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>United Kingdom</a>
                            <a href="../destinations" class="nav-dropdown-link w-dropdown-link"><span class="nav-dropdown-link-dot"> </span>USA</a>
                            
                        </div>
                    </nav>
                </div>
                <a href="../services" class="nav-link w-nav-link">Our Services</a>

            <div class="button-navbar-wrapper-tab"><a href="/contact-us-1" class="primary-button w-button">Contact Us</a></div>
        </div>
        </nav>
        <div class="button-navbar-wrapper-desk"><a href="/contact-us-1" class="primary-button-orange w-button">Contact Us</a></div>
        <div class="menu-button w-nav-button"><img src="https://cdn.prod.website-files.com/685132432d006ede770341e7/685132432d006ede770344a0_menu-btn.svg" loading="lazy" alt="icon" height="16" class="image-burger" /></div>
    </div>
    </div>
    </div>
  
  `;
    }
  }

  customElements.define('navbar-template', HeaderTemplate);