const Status = ({ status }: { status: "loading" | "success" | "error" }) => {
    return (
        <div>
            {status === "loading"
                ? "Status Loading"
                : status === "success"
                ? "Status Successfully"
                : "Status Error"}
        </div>
    );
};

export default Status;
