import React, { useState } from 'react'
import Modal from 'react-modal'
import Startrating from './StartRating';
 
const AddNewMovie= () => {
    const[name,setName]=useState("")
    const[image,setImage]=useState("")
   const [rating,setRating]=useState(1)
   const[date,setDate]=useState("")
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
  
 
  Modal.setAppElement('#root');





 
  
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
   
  
    function closeModal() {
      setIsOpen(false);
    }

  return (
    <div>
        
      <button onClick={openModal}>Add New Movie</button>
      <Modal
        isOpen={modalIsOpen}
      
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        
    
        <form>
            <label>Movie Name</label>
            <input type="text" value={name}/>
            <label>Movie poster </label>
             <input type="text" value={image}/>
             <Startrating/>
             <input type="date" value={date}/>
             <div>
                <button className='btn'>Add</button>
                <button className='btn'>cancel</button>
                
             </div>
        </form>
    </Modal>
    </div>
  )
}

export default AddNewMovie