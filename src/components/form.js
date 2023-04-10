import Input from "./Input";

const Form = () => {
  return (
    <form>
      <Input type="text" name="Book Title" id="text" key="Book Title" />
      <Input type="text" name="Book Author" id="text" key="Book Author" />
      <button type="submit">Add Book</button>
    </form> 
  );
}

export default Form;
