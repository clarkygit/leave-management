

export default function NewApplication() {
  
  return (
    <>
          <div className='flex justify-between items-baseline'>
            <h5 className='mb-10 uppercase'>New Leave Application</h5>
          </div>

          <form className='flex flex-col justify-between'>
            <div> {/* FORM ITEMS */}
              <div className='flex mb-5'> {/* HOLDER FOR LEAVE TYPE & DATE PICKERS */}
                <div className='flex flex-col mr-8'>
                  <label htmlFor='leaveType' className='mb-1.5 text-gray-500'>Leave Type</label>
                    <select id='leaveType' className='border border-gray-300 outline-none px-2 py-2 rounded'>
                      <option>Select</option>
                      <option>Vacation</option>
                      <option>Paid Time Off</option>
                      <option>Sick Leave</option>
                    </select>
                </div>
                <div className='flex flex-col mr-8'>
                  <label htmlFor='leaveStartDate' className='mb-1.5 text-gray-500'>From</label>
                  <input id='leaveStartDate' type='date' className='border border-gray-300 outline-none px-2 py-2 rounded' />
                </div>
                <div className='flex flex-col mr-8'>
                  <label htmlFor='fromDate' className='mb-1.5 text-gray-500'>To</label>
                  <input id='leaveEndDate' type='date' className='border border-gray-300 outline-none px-2 py-2 rounded' />
                </div>
              </div>
            
              <div>
                <label htmlFor="comments" className='text-gray-500'>Comments</label>
                <textarea id="comments" className='border border-gray-300 outline-none p-1.5 rounded w-full h-60 mb-5'/>
                <label htmlFor="attachment" className='text-gray-500 mr-3'>Attachment</label>
                <input id='attachdment' type='file' className='border border-gray-300 px-2 py-2 rounded mb-5' />
              </div>
            </div>
            <div className='flex'> {/* BUTTONS */}
              <button className='px-4 py-2 rounded-xl uppercase cursor-pointer bg-teal-500 text-white mr-10'>Submit</button>
              <button className='px-4 py-2 rounded-xl uppercase cursor-pointer bg-teal-500 text-white mr-10'>Cancel</button>
            </div>
          </form>
    </>
  );
}
