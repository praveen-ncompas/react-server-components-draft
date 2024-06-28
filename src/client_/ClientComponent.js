import React, { useState } from 'react';

function ClientComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Hello from Client Components!</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default ClientComponent;
