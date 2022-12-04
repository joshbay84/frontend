import './App.css';
import * as PropTypes from "prop-types";
import {Component} from "react";

class Lister extends Component {
    render() {
        return (
            <div className="Lister">
                {this.props.name}
                <ul>
                    {
                        this.props.val.map((object, i) => <li className="Align-Left">{object}</li>)
                    }
                </ul>
            </div>
        );
    }
}

Lister.propTypes = {
    val: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="Container">
                    <Lister name={"Javascript "}
                            val={["closure", "this keyword", "hoisting", "callback vs promise", "prototype"]}>
                    </Lister>
                    <Lister name={"Java"} val={["why is string immutable"]}/>

                    <Lister name={"NoSQL"} val={["volume", "velocity(too many read & write)", "variability",
                        "memcache", "Google MapReduce", "Google BigTable", "AmazonDynamo", "Consistent hashing",
                    "Eventual consistency", "Trades consistency for availability", "No Locking", "Allows reports to run in parallel",
                    "CAP - applied only when network failures", "single process - C and A", "partition : choose between C and A",
                    "ACID v BASE", "never block a write", "focus on throughput not consistency", "optimistic (failed service will eventually catch up)",
                    "reports may be inconsistent","keep things simple and avoid locks"]}/>
                </div>
            </header>
        </div>
    );
}

export default App;
