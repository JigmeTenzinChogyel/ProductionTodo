
import { useState, useCallback, useEffect, useRef } from 'react';

const Table = ({
  headers,
  minCellWidth,
	tableContent,
}) => {
  const [tableHeight, setTableHeight] = useState('auto');
  const [activeIndex, setActiveIndex] = useState(null);
  const tableElement = useRef(null);

  return (
    <div className="table-wrapper">
      <table className="resizeable-table" ref={tableElement}>
        <thead>
          <tr>
            {headers.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
            </tr>
        </thead>
        {tableContent}
      </table>
    </div>
  );
  }

export default Table;
