export const UploadInput = () => {
  return (
    <div className="mg-4">
      <p className="mg-4 text-xl">Upload Athlete Photo</p>
      <label className="border-3 border-dashed px-4 py-3 block w-full border-neutral-0 bg-neutral-700/30 hover:bg-neutral-700 rounded-xl cursor-pointer mb-2">
        <div className="bg-neutral-700 size-[50px] grid place-content-center rounded-xl border-2 border-neutral-500 mg-2 mx-auto">
          <img src="/src/assets/images/icon-upload.svg" alt="icon upload" />
        </div>
        <input className="hidden" type="file" />
        <p className="text-center text-gray-500 text-sm py-3">
          Drag and drop or click to upload athlete photo
        </p>
      </label>
      <div className="flex gap-2">
        <img src="/src/assets/images/icon-info.svg" alt="icon info" />
        <p>Upload your photo (JPG or PNG, max size: 500KB)</p>
      </div>
    </div>
  );
};
