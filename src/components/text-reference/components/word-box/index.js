import PropTypes from 'prop-types';
import LetterBox from '../letter-box';

const WordBox = ({
  index,
  currentWordIndex,
  currentLetterIndex,
  children,
}) => {
  if (index === currentWordIndex) {
    const letters = children.split('');
    const letterBoxes = letters.map((letter, i) => {
      return (
        <LetterBox
          key={`${children}${i}`}
          isActive={i === currentLetterIndex}
        >
          {letter}
        </LetterBox>
      );
    });

    return <b className="word-active">{letterBoxes}&nbsp;</b>;
  };

  return <span>{children}&nbsp;</span>;
};

WordBox.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  currentLetterIndex: PropTypes.number.isRequired,
  currentWordIndex: PropTypes.number.isRequired,
};

export default WordBox;
