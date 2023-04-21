import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [athletes, setAthletes] = useState([]);
  const navigate = useNavigate()

  const token = window.localStorage.getItem('token')
  if (!token) {
    navigate('/LoginPage')
  }

  useEffect(() => {
    fetch('http://103.54.170.133:3000/api/v1/atlit')
      .then(response => response.json())
      .then(data => setAthletes(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Atlit</h1>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Nik</th>
            <th className="px-4 py-2">Nama Lengkap</th>
            <th className="px-4 py-2">Alamat</th>
            <th className="px-4 py-2">TTL</th>
            <th className="px-4 py-2">Telephone</th>
            <th className="px-4 py-2">Jenis Kelamin</th>
            <th className="px-4 py-2">Prestasi</th>
            <th className="px-4 py-2">Cabor</th>

          </tr>
        </thead>
        <tbody>
          {athletes.map((athlete, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{athlete.nik}</td>
              <td className="border px-4 py-2">{athlete.nama}</td>
              <td className="border px-4 py-2">{athlete.alamat}</td>
              <td className="border px-4 py-2">{athlete.ttl}</td>
              <td className="border px-4 py-2">{athlete.telephone}</td>
              <td className="border px-4 py-2">{athlete.gender}</td>
              <td className="border px-4 py-2">{athlete.prestasi}</td>
              <td className="border px-4 py-2">{athlete.cabor.nama}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
