import React from 'react';
import '../styles/segments.css'; // Import the CSS file for styling

const SegmentedControl = ({ activeTab, onSelect }) => {
  return (
    <div className="segmented-control">
      <button
        className={`segmented-control-button ${activeTab === 'all' ? 'active' : ''}`}
        onClick={() => onSelect('all')}
      >
        All
      </button>
      <button
        className={`segmented-control-button ${activeTab === 'unread' ? 'active' : ''}`}
        onClick={() => onSelect('unread')}
      >
        Unread
      </button>
    </div>
  );
};

export default SegmentedControl;
