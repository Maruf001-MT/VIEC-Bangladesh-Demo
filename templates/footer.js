class FooterTemplate extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <div class="footer">
        <div class="base-container w-container">
            <div class="footer-wrapper">
                <div id="w-node-e26020e0-d801-e23a-ec7b-bdd30a5a2857-0a5a2854" data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a2857" class="footer-brand-wrapper"><a href="/home-1" aria-current="page" class="footer-brand w-nav-brand w--current"><img loading="lazy" height="Auto" alt="Logo" src="../assets/img/logo.svg" class="footer-logo"/></a>
                    <div
                        class="form-footer-wrapper">
                        <h6 class="text-white footer-text-width">VIEC is one of the largest international student recruitment companies in South Asia.</h6>
                        <div class="form-block-footer w-form">
                            <form id="email-form" name="email-form" data-name="Email Form" method="get" class="form-footer" data-wf-page-id="685132432d006ede77034208" data-wf-element-id="e26020e0-d801-e23a-ec7b-bdd30a5a285e"><input class="text-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email address" type="email" id="email" required="" /><input type="submit" data-wait="Please wait..." class="submit-button w-button"
                                    value="Submit" /></form>
                            <div class="success-message w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div class="error-message w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                </div>
            </div>
            <div data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a2867" class="footer-links-wrapper">
                <h6 class="white-text mb-10">Quick Access</h6><a href="/home-1" aria-current="page" class="footer-link w--current">Home</a><a href="/home-2" class="footer-link">About Us</a><a href="/home-3" class="footer-link">Destinations</a><a href="/home-3" class="footer-link">Success Stories</a><a href="/home-2" class="footer-link">Contact Us</a></div>
            <div data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a2870"
                class="footer-links-wrapper">
                <h6 class="white-text mb-10">Company</h6><a href="/about-us" class="footer-link">About us</a><a href="/testimonials" class="footer-link">Testimonials</a><a href="/contact-us-1"
                    class="footer-link">Contact us</a></div>
            
            <div data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a2888"
                class="footer-links-wrapper">
                <h6 class="white-text mb-10">Follow us</h6><a href="https://www.facebook.com/" target="_blank" class="footer-link">Facebook</a><a href="https://www.linkedin.com/" target="_blank" class="footer-link">Linkedin</a><a href="https://www.instagram.com/" target="_blank"
                    class="footer-link">Instagram</a></div>
            <div data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a287d" class="footer-links-wrapper">
                <h6 class="white-text mb-10">Get in Touch</h6><a href="https://maps.app.goo.gl/StDkfoGTsYd8wDa87" target="_blank" class="footer-link">Address: <br>Level-5, House #18, Road #24, Block #K, Banani, Dhaka-1213
</a><a href="tel:+8801714-019160" class="footer-link">Phone: 01714-019160</a><a href="mailto:viec.bangladesh@vieceducation.com" class="footer-link">Email: viec.bangladesh@vieceducation.com</a></div>
        </div>
        <div data-w-id="e26020e0-d801-e23a-ec7b-bdd30a5a2891" class="footer-bottom-wrapper">
            <div class="footer-copyright">Copyright ©2025. VIEC Bangladesh. All Rights Reserved.</div>
            <div class="footer-rights-wrapper">
                <div class="footer-rights">Made by <a href="#" target="_blank" class="footer-copyright-link">Maruf Zisan</a></div>
                <div class="footer-rights"></div>
            </div>
            <div class="div-block-49"></div>
        </div>
    </div>
    <div class="promotion-labels-wrapper-to-remove">
      
    </div>
    </div>
  
  `
    }
  }

  customElements.define('footer-template', FooterTemplate);