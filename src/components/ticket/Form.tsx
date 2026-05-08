import { UploadInput } from '../ui/UploadInput';
import { TextInput } from '../ui/TextInput';
import { Button } from '../ui/Button';

export const Form = () => {
  return (
    <form className="space-y-6">
      <UploadInput />

      <div className="flex flex-col gap-4">
        <TextInput label="Full Name" placeholder="Jazmín Hernández" />
        <TextInput
          label="Email Address"
          placeholder="example@gmail.com"
          type="email"
        />
        <TextInput label="Instagram Username" placeholder="@youruser" />
      </div>
      <div className="pt-4">
        <Button />
      </div>
    </form>
  );
};
