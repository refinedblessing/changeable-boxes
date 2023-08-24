import { colors } from './colors';
import { borderStyles } from './borderStyles';
const Box = ({ borderStyle, borderColor, backgroundColor, opacity = 1 }) => {
  return (
    <div
      className="box"
      style={{
        borderStyle: borderStyles[borderStyle],
        borderColor: colors[borderColor],
        backgroundColor: colors[backgroundColor],
        opacity,
      }}
    ></div>
  );
};

export default Box;
