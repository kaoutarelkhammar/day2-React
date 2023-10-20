import React from 'react';

function EmailPage() {
  const recipient = 'John Doe';
  const recoveryTime = 24;

  const getParagraph = (position) => {
    const classes = `p${position}`;
    const ids = `paragraph${position}`;
    
    if (position === 1) {
      return (
        <p className={classes} id={ids}>
          Hi <span className="recipient">{recipient}</span>,
        </p>
      );
    } else if (position === 2) {
      return (
        <p className={classes} id={ids}>
          I wanted to let you know as soon as possible that I will be staying home from work today.
        </p>
      );
    } else if (position === 3) {
      return (
        <p className={classes} id={ids}>
          Unfortunately, I developed a stomach bug that has made it very difficult to get work done.
        </p>
      );
    } else if (position === 4) {
      return (
        <p className={classes} id={ids}>
          I went to urgent care last night and was told it should subside within {recoveryTime} hours. I do not expect to be online throughout the day.
        </p>
      );
    } else if (position === 5) {
      return (
        <p className={classes} id={ids}>
          While I do plan to be back in the office tomorrow, I’ve asked Kelly to take over for me today in case any emergencies arise. I had an important call scheduled with a supplier, but Daniel has agreed to manage the meeting.
        </p>
      );
    }
  };

  return (
    <div>
      {getParagraph(1)}
      {getParagraph(2)}
      {getParagraph(3)}
      {getParagraph(4)}
      {getParagraph(5)}
      <p className="p6" id="paragraph6">
        Please let me know of any additional steps you’d like me to take to ensure the day runs as smoothly as possible in my absence.
      </p>
      <p className="p7" id="paragraph7">
        Thank you,
        <span className="signature">{recipient}</span>
      </p>
    </div>
  );
}

export default EmailPage;
