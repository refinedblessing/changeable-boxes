import { useState } from 'react';
import Box from './Box';
import Button from './Button';

import './Container.css';

import { colorsLength } from './colors';
import { borderStylesLength } from './borderStyles';

const randomInd = (length, prevInd) => {
  let randInd = Math.floor(Math.random() * length);
  while (prevInd && prevInd === randInd) {
    randInd = Math.floor(Math.random() * length);
  }
  return randInd;
};

const defaultBox1 = {
  borderStyle: randomInd(borderStylesLength),
  backgroundColor: randomInd(colorsLength),
  borderColor: randomInd(colorsLength),
};

const defaultBox2 = {
  borderStyle: randomInd(borderStylesLength),
  backgroundColor: randomInd(colorsLength),
  borderColor: randomInd(colorsLength),
};

const defaultBox3 = {
  borderStyle: randomInd(borderStylesLength),
  backgroundColor: randomInd(colorsLength),
  borderColor: randomInd(colorsLength),
};

const Container = () => {
  const [box1, setBox1] = useState(defaultBox1);
  const [box2, setBox2] = useState(defaultBox2);
  const [box3, setBox3] = useState(defaultBox3);

  const handleBoxChange = (setBox, updates) => {
    setBox((prev) => {
      updates ||= {
        borderStyle: randomInd(borderStylesLength),
        backgroundColor: randomInd(colorsLength, prev.backgroundColor),
        borderColor: randomInd(colorsLength, prev.borderColor),
      };
      return {
        ...prev,
        ...updates,
      };
    });
  };

  const handleAllBoxesChange = () => {
    handleBoxChange(setBox1);
    handleBoxChange(setBox2);
    handleBoxChange(setBox3);
  };

  const handleReset = () => {
    handleBoxChange(setBox1, defaultBox1);
    handleBoxChange(setBox2, defaultBox2);
    handleBoxChange(setBox3, defaultBox3);
  };

  const changeBoxVisibility = (setBox, opacity = 0) => {
    setBox((prev) => {
      return {
        ...prev,
        opacity,
      };
    });
  };

  const hideAllBoxes = () => {
    changeBoxVisibility(setBox1);
    changeBoxVisibility(setBox2);
    changeBoxVisibility(setBox3);
  };

  const showAllBoxes = () => {
    changeBoxVisibility(setBox1, 1);
    changeBoxVisibility(setBox2, 1);
    changeBoxVisibility(setBox3, 1);
  };

  return (
    <div className="container">
      <header className="header">
        <p>Bootstrap and JS/jQuery Worksheet</p>
      </header>
      <main>
        <header>
          <h2 className="page-header">Week 0 Class Work</h2>
        </header>

        {/* Boxes */}
        <section className="boxes">
          <Box {...box1} />
          <Box {...box2} />
          <Box {...box3} />
        </section>

        {/* Change Buttons */}
        <section>
          <h4 className="page-header change-btn">Change Buttons</h4>
          <section className="buttons">
            <Button
              changeBox={() => handleBoxChange(setBox1)}
              text="Change Box 1"
            />
            <Button
              changeBox={() => handleBoxChange(setBox2)}
              text="Change Box 2"
            />
            <Button
              changeBox={() => handleBoxChange(setBox3)}
              text="Change Box 3"
            />
            <Button changeBox={handleAllBoxesChange} text="Change All" />
          </section>
        </section>

        {/* Hide Buttons */}
        <section>
          <h4 className="page-header hide-btn">Hide Buttons</h4>
          <section className="buttons">
            <Button
              changeBox={() => changeBoxVisibility(setBox1)}
              text="Hide Box 1"
            />
            <Button
              changeBox={() => changeBoxVisibility(setBox2)}
              text="Hide Box 2"
            />
            <Button
              changeBox={() => changeBoxVisibility(setBox3)}
              text="Hide Box 3"
            />
            <Button changeBox={hideAllBoxes} text="Hide All" />
          </section>
        </section>

        {/* Final Buttons */}
        <section className="buttons final-btns">
          <Button changeBox={handleReset} text="Reset Colors" />
          <Button changeBox={showAllBoxes} text="Show All" />
        </section>
      </main>
    </div>
  );
};

export default Container;
