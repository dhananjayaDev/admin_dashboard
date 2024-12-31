import {motion} from 'framer-motion';
import { Search, Edit, Trash2 } from 'lucide-react';
import { useState } from 'react';



const PRODUCT_DATA = [
  { id: 1, name: 'Wireless Eaarbuds', category: "Accessories", price: 89.99, stock: 123, sales: 1200 },
  { id: 2, name: 'Beats Headphones', category: "Accessories", price: 349.99, stock: 23, sales: 500 },
  { id: 3, name: 'Macbook Pro', category: "Electronics", price: 1399.99, stock: 5, sales: 100 },
  { id: 4, name: 'Laptop Stand', category: "Accessories", price: 49.99, stock: 200, sales: 1000 },
  { id: 5, name: 'Wireless Mouse', category: "Accessories", price: 29.99, stock: 300, sales: 800 },
  { id: 6, name: 'iPhone 12', category: "Electronics", price: 1099.99, stock: 10, sales: 50 },
  { id: 7, name: 'iPad Pro', category: "Electronics", price: 899.99, stock: 15, sales: 75 },
  { id: 8, name: 'Apple Watch', category: "Fitness", price: 399.99, stock: 50, sales: 200 },
  { id: 9, name: 'Airpods', category: "Accessories", price: 199.99, stock: 100, sales: 500 },
  { id: 10, name: 'JBL Speaker', category: "Accessories", price: 79.99, stock: 150, sales: 600 },
  { id: 11, name: 'Samsung Galaxy S21', category: "Electronics", price: 999.99, stock: 20, sales: 100 },
  { id: 12, name: 'Samsung Galaxy Watch', category: "Fitness", price: 299.99, stock: 30, sales: 150 },
  { id: 13, name: 'Samsung Galaxy Buds', category: "Accessories", price: 129.99, stock: 90, sales: 450 },
  { id: 14, name: 'Samsung Galaxy Tab', category: "Electronics", price: 499.99, stock: 25, sales: 125 },
  { id: 15, name: 'Samsung Monitor', category: "Electronics", price: 199.99, stock: 40, sales: 200 },
  { id: 16, name: 'Samsung TV', category: "Home", price: 799.99, stock: 10, sales: 50 },
  { id: 17, name: 'Samsung Soundbar', category: "Home", price: 299.99, stock: 30, sales: 150 },
  { id: 18, name: 'Samsung Smart Fridge', category: "Home", price: 1999.99, stock: 5, sales: 25 },
  { id: 19, name: 'Samsung Microwave', category: "Home", price: 149.99, stock: 20, sales: 100 },
  { id: 20, name: 'Samsung Washing Machine', category: "Home", price: 599.99, stock: 10, sales: 50 },
  { id: 21, name: 'Samsung Dryer', category: "Home", price: 499.99, stock: 15, sales: 75 },
  { id: 22, name: 'Samsung Dishwasher', category: "Home", price: 399.99, stock: 10, sales: 50 },
  { id: 23, name: 'Samsung Oven', category: "Home", price: 799.99, stock: 5, sales: 25 },
  { id: 24, name: 'Samsung Air Conditioner', category: "Home", price: 999.99, stock: 10, sales: 50 },
  { id: 25, name: 'Samsung Fan', category: "Home", price: 149.99, stock: 20, sales: 100 },
  { id: 26, name: 'Samsung Vacuum Cleaner', category: "Home", price: 199.99, stock: 15, sales: 75 },
  { id: 27, name: 'Samsung Blender', category: "Home", price: 79.99, stock: 30, sales: 150 },
  { id: 28, name: 'Samsung Coffee Maker', category: "Home", price: 69.99, stock: 40, sales: 200 },
  { id: 29, name: 'Samsung Toaster', category: "Home", price: 49.99, stock: 50, sales: 250 },
  { id: 30, name: 'Samsung Kettle', category: "Home", price: 39.99, stock: 60, sales: 300 },
];


const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);

const handleSearch = (e) => {  
    const term = e.target.value;
    setSearchTerm(term);
    PRODUCT_DATA.filter(product => {return product.name.toLowerCase().includes(term.toLowerCase());
    });
    includes(term.toLowerCase());
}


  return (
    <motion.div 
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 nb-8'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    >

      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold'>Products List</h2>
        <div className='relative'>
          
          <input type='text' placeholder='Search products...' className='bg-gray-800 text-white focus:outline-none placeholder-gray-400 
          rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-blue-500' 
          onChange={handleSearch}
          value={searchTerm}
          />
          <Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
        </div>
      </div>

      <div className='overflow-x-auto bg-gray-800 p-4 rounded-lg'>
        <table className='min-w-full divide-y divide-gray-700'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Product</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Category</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Price</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Stock</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Sales</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Actions</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-700'>
            {PRODUCT_DATA.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.sales}</td>
                <td className='text-right'>
                  <button className='text-white p-1 hover:bg-gray-700 rounded-full'>
                    <Edit size={16} />
                  </button>
                  <button className='text-white p-1 hover:bg-gray-700 rounded-full'>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}

export default ProductsTable;
