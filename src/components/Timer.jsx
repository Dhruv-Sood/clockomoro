import { useEffect,useState } from "react";

function Timer() {

  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secs === 59) {
        setMins((prevMins) => prevMins + 1);
        setSecs(0);
      } else {
        setSecs((prevSecs) => prevSecs + 1);
      }
    }, 1000); // Update every 1000 milliseconds (1 second)

    return () => {
      clearInterval(interval); // Clear interval when the component unmounts
    };
  }, [secs]);


  const formattedMins = mins.toString().padStart(2, "0");
  const formattedSecs = secs.toString().padStart(2, "0");

  return (

    <div className="flex gap-5">
      
      
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": formattedMins }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-4xl">
          <span style={{ "--value": formattedSecs }}></span>
        </span>
        sec
      </div>
    </div>

  )
}
export default Timer