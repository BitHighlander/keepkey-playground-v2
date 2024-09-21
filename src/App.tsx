import { useState } from "react";
import { Button } from "./components/tests/index"; // Import the Button test component
import { EthereumTestSuite } from "./components/tests/index"; // Import Ethereum test suite component

function App() {
    const [count, setCount] = useState(0);

    function handleCountUpdate() {
        setCount((prev) => prev + 1);
    }

    return (
        <>
            <main className="container mx-auto p-8">
                <p className="text-3xl mb-4">KeepKey Sandbox</p>

                {/* Ethereum Test Suite */}
                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Ethereum Test Suite</h2>
                    <EthereumTestSuite />
                </section>

            </main>
        </>
    );
}

export default App;
