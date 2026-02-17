export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-[9999]">
            <div className="w-16 h-16 bg-[#13DE00] animate-pulse"></div>
        </div>
    );
}
