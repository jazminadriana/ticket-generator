import { UploadInput } from './ui/UploadInput';
import { TextInput } from './ui/TextInput';
import { Button } from './ui/Button';

export const Form = () => {
  return (
    <div className="">
      <UploadInput />
      <div className="flex flex-col gap-3">
        <TextInput label="Full Name" placeholder="Jazmín Hernández" />
        <TextInput
          label="Email Address"
          placeholder="jazminhernandez@gmail.com"
          type="email"
        />
        <TextInput label="Instagram Username" placeholder="@jazminhernandez" />
      </div>
      <Button />
    </div>
  );
};
