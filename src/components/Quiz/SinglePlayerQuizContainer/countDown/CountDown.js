import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
const CountDown = forwardRef(
  ({
    count,
    text,
    end,
    after,
    setCurrentQuestion,
    currentQuestion,
    submit,
  }) => {
    const [countDown, setCountDown] = useState(10000);
    const [start, setStart] = useState(false);
    useImperativeHandle(count, () => ({
      clearCountDown() {
        setCountDown(10000);
      },
      getCount() {
        return countDown;
      },
      start() {
        setStart(true);
      },
      stop() {
        setCountDown(0);
        setStart(false);
      },
      put(number) {
        // setStart(number);
      },
      pause(value) {
        setCountDown(value);
        setStart(false);
      },
      reset() {
        setStart(true);
        setCountDown(10000);
      },
    }));
    useEffect(() => {
      if (!start) return;
      const time = setInterval(() => {
        setCountDown(countDown - 1);
        if (countDown === 1) {
          // submit();
          setCurrentQuestion(currentQuestion + 1);
        }
      }, 1);
      return () => {
        clearInterval(time);
      };
    }, [countDown, start, currentQuestion]);
    return (
      <div className="inner_div">
        <div ref={count} id="count" className="text_large">
          {countDown}
        </div>
        <div className="subtext">{text}</div>
      </div>
    );
  }
);

export default CountDown;
