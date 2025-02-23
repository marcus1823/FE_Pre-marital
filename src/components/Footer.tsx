const Footer = () => {
  return (
      <footer className="bg-green-900 text-white py-6">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              {/* Thông tin liên hệ */}
              <div className="text-center md:text-left mb-4 md:mb-0">
                  <h2 className="text-lg font-semibold flex items-center gap-2">
                      <img src="src/assets/logo2.png" alt="MarriTalk" className="w-32 h-10" />
                  </h2>
                  <p className="text-sm mt-2">
                      Address: BS16, The Oasis, VinHome Grand Park, Q.9, HCM
                  </p>
                  <p className="text-sm">Email: Anhtuyetxinhdep@gmail.com</p>
                  <p className="text-sm">PhoneNumber: 0123456789</p>
              </div>

              {/* Mạng xã hội */}
              <div className="text-center md:text-right">
                  <p className="text-sm mb-2">
                      We are always ready to listen to your contributions and resolve your questions.
                  </p>
                  <div className="flex justify-center md:justify-end gap-4">
                      <a href="#" className="text-white text-2xl"><i className="fab fa-facebook"></i></a>
                      <a href="#" className="text-white text-2xl"><i className="fab fa-instagram"></i></a>
                      <a href="#" className="text-white text-2xl"><i className="fab fa-x-twitter"></i></a>
                      <a href="#" className="text-white text-2xl"><i className="fab fa-tiktok"></i></a>
                      <a href="#" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
                  </div>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
