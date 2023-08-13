import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { v4 as uuid } from 'uuid'
import GroceryListComponents from './GroceryListComponents';
 
const GroceryComponents = () => {
    const [grocery, setGrocery] = useState("");
    const [groceryList, setGroceryList] = useState([]);
    const handleGrocery = () => {
        setGroceryList([...groceryList, { id: uuid(), name: grocery}])
    }

    const handleEditGrocery = (id, newItem) => {
        const updateGroceryList = groceryList.map((item) => {
            if(item.id === id){
                return {...item, name: newItem};
            }
            return item;
        });
        setGroceryList(updateGroceryList);
    }

    const handleDeleteGrocery = (removeId) => {
        const filterItems = groceryList.filter((item) => item.id !== removeId);
        setGroceryList(filterItems);
    }

    const handleClearAll = () => {
        setGroceryList([]);
    }

    return (
        <div className='grid grid-cols place-items-center'>
            <div className="text-center">
                <img 
                    src={logo}
                    alt="" 
                    className='h-32'
                />
                <h1 className='text-2xl font-semibold'>Grocery Minder</h1>
            </div>

            <div className="flex items-center py-5">   
                <div className="relative md:w-72 w-full">
                    <input 
                        type="text" 
                        name={grocery} 
                        onChange={(e) => setGrocery(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5" 
                        placeholder="Add items..." 
                        required 
                    />
                </div>
                <button 
                    onClick={handleGrocery} 
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Add
                </button>
            </div>
            <div className='flex w-96 max-sm:w-[18rem] mb-3'>
                <div className="flex-grow">Items({groceryList.length})</div>
                <button
                    onClick={handleClearAll}
                    className="text-red-600 cursor-pointer"
                >
                    Clear all
                </button>
            </div>
            <ul>
                {groceryList.map((groceryList) => (
                    <GroceryListComponents 
                        key={groceryList.id} 
                        groceryList={groceryList} 
                        handleEditGrocery={handleEditGrocery}
                        handleDeleteGrocery={handleDeleteGrocery}
                        handleClearAll={handleClearAll}
                    />
                ))}
            </ul>
        </div>
    )
}

export default GroceryComponents
