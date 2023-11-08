import React from 'react'
import Form from 'react-bootstrap/Form';

function CodeInput() {
  return (
    <div className="h-80 w-60 bg-slate-500">
      <Form.Control
        type="text"
        placeholder="Write Your Code Here"
        aria-label="Disabled input example"
        enabled
        
      />
      {/* <br />
      <Form.Control
        type="text"
        placeholder="Output"
        aria-label="Disabled input example"
        enabled
      /> */}
    </div>
  );
}

export default CodeInput