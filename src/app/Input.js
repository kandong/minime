import React, { useState, useCallback } from "react";

function Input({ baby }) {
  const [gender, setGender] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(null);
  const onChange = useCallback((e) => {
    setGender(e.target.value);
    setSaveSuccess(null);
  }, []);
  const onSave = useCallback(() => {
    const updateGender = async () => {
      try {
        await baby.set({
          gender,
        });
        setSaveSuccess(true);
        setGender("");
      } catch (error) {
        setSaveSuccess(false);
      }
    };
    updateGender();
  }, [baby, gender]);

  return (
    <div className="input-container">
      <p>Please select a gender option:</p>
      <label>
        <input
          type="radio"
          value="boy"
          checked={gender === "boy"}
          onChange={onChange}
        />
        Boy
      </label>
      <label>
        <input
          type="radio"
          value="girl"
          checked={gender === "girl"}
          onChange={onChange}
        />
        Girl
      </label>
      <button className="input-submit-btn" type="submit" onClick={onSave}>
        Save
      </button>
      {saveSuccess !== null && (
        <p>{`${
          saveSuccess ? "Saved Successfully!" : "There was an error..."
        }`}</p>
      )}
    </div>
  );
}

export default Input;
