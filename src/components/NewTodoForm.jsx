import {
  Button,
  FormControl,
  Input,
} from '@chakra-ui/react';

const NewTodoForm = ({ value, updateText, handleAction }) => {
  const handleKey = (event) => {
    if (event.key === "Enter") handleAction();
  } 

  return (
    <FormControl display={'flex'} mt={6}>
      <Input
        id="newtodo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
        onKeyPress={handleKey}
      />
      <Button onClick={handleAction}>Add todo</Button>
    </FormControl>
  );
};

export default NewTodoForm;
