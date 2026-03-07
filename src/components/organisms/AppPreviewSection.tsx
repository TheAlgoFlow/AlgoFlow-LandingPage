export default function AppPreviewSection() {
    return (
        <section className="scroll-panel relative flex w-full flex-col items-center justify-center bg-zinc-50 px-4 min-h-[120vh]">
            <div className="scroll-panel-inner w-full flex flex-col items-center justify-center min-h-[120vh]">
                <div className="w-full max-w-6xl px-4 md:px-8">
                    <div className="w-full aspect-video bg-[#0a0a0a] rounded-2xl shadow-2xl border border-zinc-800/50 overflow-hidden relative">
                        {/* Inner content of the screen will go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
