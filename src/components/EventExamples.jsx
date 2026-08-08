function EventExamples() {
  // Basic click handler
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Input change handler
  const handleInput = (event) => {
    console.log("Input value:", event.target.value);
  };

  // Handler with custom parameter
  const handleItemClick = (itemId) => {
    console.log("Item clicked:", itemId);
  };

  return (
    <div>
      <h2>Event Examples</h2>

      {/* Basic click */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br /><br />

      {/* Input event */}
      <input
        onChange={handleInput}
        placeholder="Type something..."
      />

      <br /><br />

      {/* Pass a custom parameter */}
      <button onClick={() => handleItemClick(123)}>
        Item 123
      </button>

      <br /><br />

      {/* Prevent default form submission */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submitted");
        }}
      >
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EventExamples;