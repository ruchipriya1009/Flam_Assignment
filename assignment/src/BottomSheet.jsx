import React, { useState } from 'react';
import './BottomSheet.css';

const BottomSheet = () => {
  const [snapPoint, setSnapPoint] = useState('closed');
  const [showFullViewButton, setShowFullViewButton] = useState(true);

  const toggleBottomSheet = () => {
    if (snapPoint === 'closed') {
      setSnapPoint('half-open');
    } else if (snapPoint === 'half-open') {
      setSnapPoint('open');
      setShowFullViewButton(false); 
    } else {
      setSnapPoint('closed');
      setShowFullViewButton(true); 
    }
  };

  return (
    <div className={`bottom-sheet ${snapPoint}`} onClick={toggleBottomSheet}>
      <div className="handle"></div>
      <div className="content">
        {snapPoint === 'closed' && <button>Click to Open</button>}
        {snapPoint !== 'closed' && (
          <>
            <h2>Bottom Sheet Content</h2>
            <p>
              Just as with content, if the header or footer changes their height the sheet will readjust accordingly.
              <br /> <br /><br />
              {showFullViewButton && <button>Full View</button>}
            </p>

            {snapPoint === 'open' && (
              <>
              
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias itaque veritatis accusamus?
                  Laboriosam, iure dolor. Beatae voluptatum accusamus harum ipsa quidem, soluta velit voluptates
                  voluptatibus numquam minima at saepe illo?here...
                  <button onClick={() => setShowFullViewButton(true)}>close</button>
                </p>

                <p>More content...</p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BottomSheet;
