import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Wrap } from "./App.styled";



export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  
const options = ['good', 'neutral', 'bad'];
const total = good + neutral + bad;

  const positiveFeedback = () => {
    return Math.round((good / total) * 100)
  }
  
  
   const onLeaveFeedback = e => {
     switch (e) {
       case 'good':
         setGood(good+1)
         break
       
       case 'neutral':
         setNeutral(neutral+1)
         break
       
       case 'bad':
         setBad(bad+1)
         break
       
       default: 
         return
    }
  };
  return (
      <Wrap>
        <Section title={`Please leave feedback`} >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onLeaveFeedback} />
          
        </Section>
      <Section title={`Statistics`}>
        {total > 0
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback()}
          />
          : <Notification message={`There is no feedback!`}/>}
      </Section>
      </Wrap>
        )
}