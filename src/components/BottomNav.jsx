
export default function BottomNav () {
    
  return (
    <div className="text-[gray] border-[gray] lg:text-[15px] border-b-[0.5px] flex justify-center items-center gap-8 text-sm font-light h-16 rounded-tl-md rounded-tr-md  ">
      <button type="button" className="focus:font-bold">
        All
      </button>
      <button type="button" className="focus:font-bold">
        Active
      </button>
      <button type="button" className="focus:font-bold">
        Completed
      </button>
    </div>
  );
}


