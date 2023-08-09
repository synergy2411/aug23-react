import { useDispatch, useSelector } from "react-redux";
import * as fromActions from "../store/actions/counter.action";

export default function CounterResult() {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.ctr.counter);
  const result = useSelector((store) => store.res.result);

  return (
    <>
      <hr />
      <button
        className="btn btn-danger btn-lg"
        onClick={() => dispatch(fromActions.storeResult(counter))}
      >
        Store Result
      </button>

      <ul className="list-group">
        {result.map((r, i) => (
          <li
            className="list-group-item"
            key={i}
            onClick={() => dispatch(fromActions.deleteResult(i))}
          >
            {r}{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
