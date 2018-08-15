import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log("preveProps", prevProps);
    console.log("preveState", prevState);
  }
  componentWillUnmount() {
    console.log("Counter-unmount");
  }
  render() {
    console.log("Counter-rendered");
    const { onIncrement, counter, onDelete } = this.props;

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let badgClasses = "badge m-2 badge-";
    badgClasses += this.props.counter.value === 0 ? "warning" : "primary";
    return badgClasses;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

// tags: ["tag1"]

// renderTags() {
//   if (this.state.tags.length === 0) return <p>There is no tags!</p>;
//   return (
//     <ul>
//       {this.state.tags.map(tag => (
//         <li key={tag}> {tag}</li>
//       ))}
//     </ul>
//   );
// }
// /* {this.state.tags.length === 0 && "Please create a new tags!"}
//         {this.renderTags()} */
// {this.props.children}

// state = {
//   value: this.props.counter.value
// };

// handleIncrement = product => {
//   console.log(product);
//   this.setState({ value: this.state.value + 1 });
// };
