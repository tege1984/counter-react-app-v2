import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    console.log("Counters-rendered");
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

// {/* <Counter key={counter.id} value={counter.value}>
//             <h1> Counter #{counter.id} </h1>
//           </Counter> */}
