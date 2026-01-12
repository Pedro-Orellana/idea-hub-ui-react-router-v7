const Footer = () => {
  return (
    <section id="footer" className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto py-10">
        <div className="flex items-center justify-between">
          {/* section 1 */}
          <div className="flex flex-col">
            <h2 className="text-orange-500 text-2xl font-bold">IdeaHub</h2>
            <p className="text-sm font-thin">©2026. All rights reserved</p>
          </div>
          {/* section 2 */}
          <div className="flex flex-col space-y-4">
            <button className="hover:cursor-pointer font-thin">
              Contact Me
            </button>
            <button className="hover:cursor-pointer font-thin">About</button>
            <button className="hover:cursor-pointer font-thin">
              New account
            </button>
          </div>

          {/* section 3 */}
          <div className="flex space-x-8">
            <img src="/images/icon-facebook.svg" alt="facebook icon" />
            <img src="/images/icon-instagram.svg" alt="instagram icon" />
            <img src="/images/icon-twitter.svg" alt="twitter icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
