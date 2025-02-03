export default function GiftCard({ accountNumber, accountName, type }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
  };

  return (
    <div className='p-8 border-slate-300 bg-white border rounded-[12px] mt-8 text-black' data-aos='zoom-in'>
      {type === 'BCA' ? <img src='/img/bca.png ' className='w-[100px] ml-auto' /> : <img src='/img/mandiri.png ' className='w-[100px] ml-auto' />}
      <hr className='h-px my-6 border-t bg-slate-600 border-slate-600 ' />
      <div className='flex flex-col mt-10 '>
        <div className='flex items-center justify-between'>
          <button onClick={handleCopy} className='text-[15px] font-roboto font-medium px-8 flex items-center gap-2 '>
            Copy
            <i className='leading-none ri-file-copy-line'></i>
          </button>
          <p className='text-[18px] font-roboto'>{accountNumber}</p>
        </div>
        <p className='text-[18px] font-roboto text-right mt-4'>an {accountName}</p>
      </div>
    </div>
  );
}
