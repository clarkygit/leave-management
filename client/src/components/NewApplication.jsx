import { useContext, useState } from 'react';
import { modalContext } from './Layout'
import api from '../api/axios';


  export default function NewApplication() {
    const {closeModal} = useContext(modalContext);

    //USESTATE ARRAY FOR LEAVE INFO
    const [leaveInfo, setLeaveInfo] = useState({
      leaveType: '',
      leaveStartDate: '',
      leaveEndDate: '',
      comment: '',
      status: 'Pending',
    });


    //TEMPORARILY STORE LEAVE INFO
    const handleInputChange = (e) => {
      setLeaveInfo({ ...leaveInfo, [e.target.name]: e.target.value });
      console.log(leaveInfo);
    };

    //HANDLE SUBMIT
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await api.post('/leaves', leaveInfo);
        setLeaveInfo({ leaveType: '', startDate: '', endDate: '', comment: '' });
        console.log("Sucess")
        closeModal();
        //onAdded(); // Notify parent to refresh table
      } catch (err) {
        console.error('Failed to submit leave:', err);
      }
    };


    return (
      <>
          <div className='flex justify-between items-baseline'>
            <h5 className='mb-10 uppercase'>New Leave Application</h5>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col justify-between'>
            <div> {/* FORM ITEMS */}
              <div className='flex mb-5'> {/* HOLDER FOR LEAVE TYPE & DATE PICKERS */}
                <div className='flex flex-col mr-8'>
                  <label htmlFor='leaveType' className='mb-1.5 text-gray-500'>Leave Type</label>
                    <select name='leaveType' onChange={handleInputChange} className='border border-gray-300 outline-none px-2 py-2 rounded'>
                      <option>Select</option>
                      <option>Vacation</option>
                      <option>Paid Time Off</option>
                      <option>Sick Leave</option>
                    </select>
                </div>
                <div className='flex flex-col mr-8'>
                  <label htmlFor='leaveStartDate' className='mb-1.5 text-gray-500'>From</label>
                  <input name='leaveStartDate' onChange={handleInputChange} type='date' className='border border-gray-300 outline-none px-2 py-2 rounded' />
                </div>
                <div className='flex flex-col mr-8'>
                  <label htmlFor='fromDate' className='mb-1.5 text-gray-500'>To</label>
                  <input name='leaveEndDate' onChange={handleInputChange} type='date' className='border border-gray-300 outline-none px-2 py-2 rounded' />
                </div>
              </div>
            
              <div>
                <label htmlFor="comments" className='text-gray-500'>Comments</label>
                <textarea name="comments" onChange={handleInputChange} className='border border-gray-300 outline-none p-1.5 rounded w-full h-60 mb-5'/>
                <label htmlFor="attachment" className='text-gray-500 mr-3'>Attachment</label>
                <input id='attachdment' type='file' className='border border-gray-300 px-2 py-2 rounded mb-5' />
              </div>
            </div>
            <div className='flex'> {/* BUTTONS */}
              <button type='submit' className='px-4 py-2 rounded-xl uppercase cursor-pointer bg-teal-500 text-white mr-10'>Submit</button>
              <button onClick={(e) => {closeModal()}} className='px-4 py-2 rounded-xl uppercase cursor-pointer bg-teal-500 text-white mr-10'>Cancel</button>
            </div>
          </form>
      </>
  );
}
