import Box from './Box';
import Button from './Button';

import './Container.css';

const Container = () => {
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
          <Box />
          <Box />
          <Box />
        </section>

        {/* Change Buttons */}
        <section>
          <h4 className="page-header change-btn">Change Buttons</h4>
          <section className="buttons">
            <Button text="Change Box 1" />
            <Button text="Change Box 2" />
            <Button text="Change Box 3" />
            <Button text="Change All" />
          </section>
        </section>

        {/* Hide Buttons */}
        <section>
          <h4 className="page-header hide-btn">Hide Buttons</h4>
          <section className="buttons">
            <Button text="Hide Box 1" />
            <Button text="Hide Box 2" />
            <Button text="Hide Box 3" />
            <Button text="Hide All" />
          </section>
        </section>

        {/* Final Buttons */}
        <section className="buttons final-btns">
          <Button text="Reset Colors" />
          <Button text="Show All" />
        </section>
      </main>
    </div>
  );
};

export default Container;
