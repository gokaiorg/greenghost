export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[100]">
            <div className="w-12 h-12 bg-[#13DE00] animate-pulse"></div>
        </div>
    );
}
