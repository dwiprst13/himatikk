import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Menyimpan posisi scroll saat pengguna meninggalkan halaman
    const onRouteChange = () => {
      sessionStorage.setItem("scrollPosition", window.pageYOffset);
    };

    // Mengembalikan posisi scroll saat pengguna kembali ke halaman sebelumnya
    const onPopState = () => {
      const scrollPosition = sessionStorage.getItem("scrollPosition");
      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition));
      }
    };

    // Mendaftarkan event listener untuk menangani perubahan rute dan navigasi kembali
    window.addEventListener("popstate", onPopState);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener("popstate", onPopState);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
