import React from "react";

import { useDispatch, useSelector, connect } from "react-redux";
import * as fromActions from "../store/actions/counter.action";

// export default function CounterResult() {
//   const dispatch = useDispatch();
//   const counter = useSelector((store) => store.ctr.counter);
//   const result = useSelector((store) => store.res.result);

//   return (
//     <>
//       <hr />
//       <button
//         className="btn btn-danger btn-lg"
//         onClick={() => dispatch(fromActions.storeResult(counter))}
//       >
//         Store Result
//       </button>

//       <ul className="list-group">
//         {result.map((r, i) => (
//           <li
//             className="list-group-item"
//             key={i}
//             onClick={() => dispatch(fromActions.deleteResult(i))}
//           >
//             {r}{" "}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

class CounterResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <hr />
        <button
          className="btn btn-danger btn-lg"
          onClick={() => this.props.onStoreResult(this.props.counter)}
        >
          Store Result
        </button>

        <ul className="list-group">
          {this.props.result.map((r, i) => (
            <li
              className="list-group-item"
              key={i}
              onClick={() => this.props.onDeleteResult(i)}
            >
              {r}{" "}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    counter: store.ctr.counter,
    result: store.res.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onStoreResult: (value) => {
      dispatch(fromActions.storeResult(value));
    },
    onDeleteResult: (index) => {
      dispatch(fromActions.deleteResult(index));
    },
  };
};

// const connectedFn = connect(mapStateToProps, mapDispatchToProps);

// export default connectedFn(CounterResult);

export default connect(mapStateToProps, mapDispatchToProps)(CounterResult);
