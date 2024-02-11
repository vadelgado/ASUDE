import React from 'react';

function YourComponent() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/FGRnUzPVEAAbqM8?format=jpg&name=large"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src="https://pbs.twimg.com/media/FGRnNpAVUAYqRYv?format=jpg&name=large"
              alt=""
            />
          </div>
        </div>
        <div className="grid gap-4">
          {/* Repeat the pattern for the other grid sections */}
        </div>
        {/* Repeat the pattern for the other grid columns */}
      </div>
    </div>
  );
}

export default YourComponent;
