import { useState } from 'react';
import Navbar from '../components/Navbar'

function CaborName() {

  const PengurusKoni = [
    {
      id: 1,
      name: 'KUSDIRA BA',
      title: 'KETUA UMUM',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      children: [
        {
          id: 2,
          name: 'REMBO UNDERTAKER',
          title: 'WAKIL KETUA',
          image: 'https://randomuser.me/api/portraits/women/2.jpg',
        }],
      }
  ];

  const OrgChart = ({ data }) => {
    const [showChildren, setShowChildren] = useState(true);
  
    const toggleChildren = () => {
      setShowChildren((prevState) => !prevState);
    };

  return (
    <div className="relative">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
        <img src={data.image} alt={data.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h2 className="text-lg font-semibold">{data.name}</h2>
        <p className="text-sm text-gray-600">{data.title}</p>
      </div>
    </div>
    {data.children && (
      <button
        className="absolute top-0 right-0 p-2 rounded-full bg-red-500 text-white text-sm font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        onClick={toggleChildren}
      >
        {showChildren ? 'Hide' : 'Show'}
      </button>
    )}
    {showChildren && data.children && (
      <div className="ml-16 mt-2">
        {data.children.map((child) => (
          <OrgChart key={child.id} data={child} />
        ))}
      </div>
    )}
  </div>
)
}

return (
<>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-5">
<div className="mx-auto">
<OrgChart data={PengurusKoni[0]} />
</div>
</div>
</>
);
}

export default CaborName;