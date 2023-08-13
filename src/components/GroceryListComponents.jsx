import React, { useState } from 'react'

const GroceryListComponents = ({groceryList , handleEditGrocery, handleDeleteGrocery, handleClearAll}) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newItem, setNewItem] = useState(groceryList.name)
  const onEdit = () => {
    handleEditGrocery(groceryList.id, newItem)
    setIsEdit(false);
  }
  
  return (
    <>
      <li className="flex gap-5 w-full max-sm:w-[18rem] py-1">
        <input 
          type="checkbox" 
          value={isComplete}
          onChange={(e) => setIsComplete(e.target.checked)}
          className="text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" 
        />
        {isEdit ? 
           <input 
            type="text" 
            value={newItem}            
            onChange={(e) => setNewItem(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-64 pl-5 p-2.5" 
          />
        : <span className={`w-[17rem] max-sm:w-64 text-md ${isComplete ? 'line-through' : '' }`}>{groceryList.name}</span>
        }
        <div className={`flex gap-3 justify-end ${isComplete ? 'invisible' : 'first-letter:'}`}>
          <button  onClick={() => {isEdit ? onEdit() : setIsEdit(true)}}>
            {isEdit ? 
              <i className='fa-regular fa-save fa fa-lg text-green-600'></i>
            :
              <i className='fa-regular fa-pen-to-square fa fa-lg text-blue-600'></i>
            }
          </button>
          <button onClick={() => handleDeleteGrocery(groceryList.id)}>
            <i className='fa-solid fa-xmark fa fa-lg text-red-600'></i>
          </button>
        </div>
      </li>
    </>
  )
}

export default GroceryListComponents
