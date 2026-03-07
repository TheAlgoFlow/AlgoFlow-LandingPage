export default function AppPreviewSection() {
    return (
        <section className="scroll-panel relative flex w-full flex-col items-center justify-center bg-zinc-50 min-h-[120vh]">
            <div className="scroll-panel-inner w-full flex flex-col items-center justify-center min-h-[130vh]">
                <div className="w-[98vw] max-w-[2400px]">
                    <div className="w-full aspect-[16/10] md:aspect-video bg-[#000000] rounded-3xl shadow-2xl border border-zinc-800/50 overflow-hidden relative">
                        {/* Inner content of the screen will go here */}
                    </div>
                </div>
            </div>
        </section>
    );
}
