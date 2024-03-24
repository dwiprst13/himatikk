import React, { useEffect, useState } from "react";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";
// import BlogCard from "../components/Card/BlogCard";

function BlogPage() {
  const [data, setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8081/blog")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, [])
  return (
    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>Judul</th>
          <th>Isi</th>
        </thead>
        <tbody>
          {data.map((d, i) =>(
            <tr key={i}>
              <td>{d.id_berita}</td>
              <td>{d.judul_berita}</td>
              <td>{d.isi_berita}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogPage;
