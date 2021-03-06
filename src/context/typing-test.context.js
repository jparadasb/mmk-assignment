import {createContext, useContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import typingTestReducer, {
  defaultState,
} from '../reducers/typing-test.reducer';

const TypingTestContext = createContext();

function TypingTestConsumer({children}) {
  return (
    <TypingTestContext.Consumer>
      {(context) => {
        if (context === undefined) {
          throw new Error('CountConsumer must be used within a CountProvider');
        }
        return children(context);
      }}
    </TypingTestContext.Consumer>
  );
}

TypingTestConsumer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

function TypingTestProvider({children}) {
  const [state, dispatch] = useReducer(typingTestReducer, defaultState);
  const value = {state, dispatch};
  return (
    <TypingTestContext.Provider
      value={value}>
      {children}
    </TypingTestContext.Provider>
  );
}

function useTypingTest() {
  const context = useContext(TypingTestContext);
  if (context === undefined) {
    throw new Error('useTypingTest must be used within a TypingTestContext');
  }
  return context;
}

TypingTestProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export {TypingTestProvider, useTypingTest, TypingTestConsumer};
