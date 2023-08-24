import Box from './Box';
import Button from './Button';

import './Container.css';

const Container = () => {
  return (
    <div className="container">
      <header>
        <p>Bootstrap and JS/jQuery Worksheet</p>
      </header>
      <main>
        <header>
          <h2 className="page-header">Week 0 Class Work</h2>
        </header>

        {/* Boxes */}
        <section>
          <Box />
          <Box />
          <Box />
        </section>

        {/* Change Buttons */}
        <section>
          <h4 className="page-header">Change Buttons</h4>
          <section>
            <Button text="Change Box 1" />
            <Button text="Change Box 2" />
            <Button text="Change Box 3" />
            <Button text="Change Box All" />
          </section>
        </section>

        {/* Hide Buttons */}
        <section>
          <h4 className="page-header">Hide Buttons</h4>
          <section>
            <Button text="Hide Box 1" />
            <Button text="Hide Box 2" />
            <Button text="Hide Box 3" />
            <Button text="Hide Box All" />
          </section>
        </section>

        {/* Final Buttons */}
        <section>
          <Button text="Reset Colors" />
          <Button text="Show All" />
        </section>
      </main>
    </div>
  );
};

export default Container;
