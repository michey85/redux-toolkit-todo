const NewTodoForm = ({ value, updateText, handleAction }) => {
  return (
    <form onSubmit={e => {e.preventDefault(); handleAction()}}>
      <input
        placeholer='new todo'
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button onClick={handleAction}>Add todo</button>
    </form>
  );
};

export default NewTodoForm;
