"use client";
import React, { useState } from "react";

import ContrastForm, { contrastRow } from "@/components/shared/ContrastForm";

const App = () => {
  const [rows, setRows] = useState<contrastRow[]>([]);

  const addRow = (row: contrastRow) => {
    setRows([...rows, row]);
  };

  const removeRow = (rowCreateAt: string) => {
    const purgedRows = rows.filter((row) => row.createdAt !== rowCreateAt);
    setRows(purgedRows);
  };

  const fontSizes = [12, 14, 16, 18];
  const fontWeights = [200, 400, 600];

  return (
    <div className="container flex flex-col items-center p-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold">Contrast Checker</h1>
      </div>

      <ContrastForm addRow={addRow} />

      <div className="w-full max-w-lg space-y-4">
        {rows.map((row, index) => (
          <div
            key={index}
            className="p-4 rounded"
            style={{ backgroundColor: row.bgColor }}
          >
            <div className="grid grid-cols-4 gap-4">
              {fontSizes.map((size) => (
                <div key={size} className="space-y-2">
                  {fontWeights.map((weight) => (
                    <p
                      key={`${size}-${weight}`}
                      style={{
                        fontSize: `${size}px`,
                        fontWeight: weight,
                        color: row.textColor,
                      }}
                    >
                      {row.text} - {size}px, Weight: {weight}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            <button
              type="button"
              className="p-2 mt-4 bg-slate-500 text-white font-bold rounded w-full text-center"
              onClick={() => removeRow(row.createdAt)}
            >
              Remove Row
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
