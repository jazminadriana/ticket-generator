import iconUpload from '/src/assets/images/icon-upload.png';
import iconInfo from '/src/assets/images/icon-info.svg';

export const UploadInput = () => {
  return (
    <div className="mb-6">
      <label className="block text-xl mb-3 font-medium text-neutral-0">
        Upload Athlete Photo
      </label>

      <label className="border-2 border-dashed border-neutral-500/50 px-4 py-8 block w-full bg-neutral-800/30 hover:bg-neutral-800/60 transition-colors rounded-2xl cursor-pointer mb-3">
        <div className="size-[64px] mx-auto mb-4 bg-neutral-700/50 rounded-2xl grid place-content-center border border-neutral-600">
          <div
            className="size-8 bg-linear-to-tr from-brand-pink to-brand-purple"
            style={{
              maskImage: `url(${iconUpload})`,
              WebkitMaskImage: `url(${iconUpload})`,
              maskRepeat: 'no-repeat',
              maskSize: 'contain',
            }}
          />
        </div>

        <input className="hidden" type="file" />

        <p className="text-neutral-400 text-center text-base">
          Drag and drop or click to{' '}
          <span className="text-neutral-0">upload athlete photo</span>
        </p>
      </label>

      <div className="flex items-center gap-2 text-neutral-400">
        <img src={iconInfo} alt="info" className="size-4 opacity-70" />
        <p className="text-xs md:text-sm text-neutral-300">
          Upload your photo (JPG or PNG, max size: 500KB)
        </p>
      </div>
    </div>
  );
};
