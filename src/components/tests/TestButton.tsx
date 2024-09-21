// TestButton.tsx
import React, { useState } from "react";
import { CheckCircledIcon, ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Button } from "./Button";
import { Spinner } from "./Spinner";

export const TestButton = ({
                               testName,
                               runTest,
                           }: {
    testName: string;
    runTest: () => Promise<string | boolean | null>;
}) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<boolean | null>(null);
    const [result, setResult] = useState<string | null>(null);

    const handleTest = async () => {
        setLoading(true);
        setSuccess(null);
        setResult(null); // Reset result before running the test
        try {
            const testResult = await runTest();
            if (typeof testResult === "string") {
                setSuccess(true);
                setResult(testResult);
            } else {
                setSuccess(!!testResult);
            }
        } catch (error) {
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-2">
            <div className="flex items-center space-x-2">
                <Button onClick={handleTest} variant="secondary">
                    {testName}
                </Button>
                {loading && <Spinner />}
                {success === true && <CheckCircledIcon className="text-green-500" />}
                {success === false && (
                    <ExclamationTriangleIcon className="text-red-500" />
                )}
            </div>
            {/* Display result if available */}
            {result && (
                <div className="space-y-1">
                    <span className="font-medium">Signed Message:</span>
                    <p className="text-gray-700">{result}</p>
                </div>
            )}
        </div>
    );
};
