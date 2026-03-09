import LandingTemplate from "@/components/templates/LandingTemplate";

export const metadata = {
    title: "Política de Privacidade | AlgoFlow",
    description:
        "Conheça a política de privacidade do AlgoFlow e entenda como tratamos seus dados com segurança e transparência.",
};

export default function PrivacyPage() {
    return (
        <LandingTemplate>
            <main className="bg-white text-zinc-900">
                <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                            Política de Privacidade
                        </h1>
                        <p className="mt-4 text-base text-zinc-500 sm:text-lg">
                            Transparência total sobre como coletamos, utilizamos e protegemos os seus dados.
                        </p>
                        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-800/40" />
                    </div>

                    <div className="space-y-8 rounded-3xl border border-zinc-200/60 bg-zinc-50/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
                        <p className="text-base leading-relaxed text-zinc-500">
                            A sua privacidade é importante para nós. É política do{" "}
                            <span className="font-semibold text-zinc-900">AlgoFlow</span> respeitar a sua privacidade em relação a qualquer
                            informação sua que possamos coletar no site{" "}
                            <a
                                href="/"
                                className="font-medium text-zinc-900 underline decoration-zinc-900/30 transition-colors hover:text-zinc-900/80 hover:decoration-zinc-900/60"
                            >
                                AlgoFlow
                            </a>
                            , e outros sites que possuímos e operamos.
                        </p>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Coleta de Informações
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por
                                meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será
                                usado.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Armazenamento e Proteção
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos
                                dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação,
                                cópia, uso ou modificação não autorizados.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Compartilhamento de Dados
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                            </p>
                        </section>
                    </div>

                </section>
            </main>
        </LandingTemplate>
    );
}
