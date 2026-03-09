import Link from "next/link";
import LandingTemplate from "@/components/templates/LandingTemplate";

export const metadata = {
    title: "Termos de Serviço | AlgoFlow",
    description:
        "Leia os Termos de Serviço do AlgoFlow e compreenda as condições para utilização da plataforma.",
};

export default function TermsPage() {
    return (
        <LandingTemplate>
            <main className="bg-white text-zinc-900">
                <section className="container mx-auto max-w-4xl px-4 py-28 sm:px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h1 className="mt-6 text-3xl font-semibold sm:text-4xl lg:text-5xl">
                            Termos de Serviço
                        </h1>
                        <p className="mt-4 text-base text-zinc-500 sm:text-lg">
                            Ao acessar nosso aplicativo, você concorda com os termos abaixo. Leia atentamente.
                        </p>
                        <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-zinc-800 to-zinc-800/40" />
                    </div>

                    <div className="space-y-8 rounded-3xl border border-zinc-200/60 bg-zinc-50/60 p-8 shadow-lg backdrop-blur-xl sm:p-10">
                        <p className="text-base leading-relaxed text-zinc-500">
                            Bem-vindo ao <span className="font-semibold text-zinc-900">AlgoFlow</span>. Ao acessar e utilizar nossa ferramenta de visualização de algoritmos disponível em nosso domínio principal, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso.
                        </p>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Aceitação dos Termos
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Ao acessar e utilizar o AlgoFlow, você confirma que leu, compreendeu e concorda em estar vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso serviço. O uso continuado da aplicação implica aceitação de quaisquer alterações feitas nestes termos.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Uso do Serviço
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                O AlgoFlow é uma plataforma educacional para visualização de algoritmos. Você concorda em utilizar o serviço apenas para fins legais e de acordo com estes termos. É proibido:
                            </p>
                            <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-500">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                                    <span>Utilizar o serviço para qualquer finalidade ilegal ou não autorizada</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                                    <span>Tentar obter acesso não autorizado a qualquer parte do serviço</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                                    <span>Interferir ou interromper o funcionamento do serviço</span>
                                </li>
                            </ul>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Privacidade e Segurança
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                A proteção de seus dados é nossa prioridade. Para mais detalhes sobre como coletamos, usamos e protegemos suas informações, consulte nossa{" "}
                                <Link
                                    href="/privacy"
                                    className="font-medium text-zinc-900 underline decoration-zinc-900/30 transition-colors hover:text-zinc-900/80 hover:decoration-zinc-900/60"
                                >
                                    Política de Privacidade
                                </Link>
                                .
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Limitação de Responsabilidade
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                O AlgoFlow é fornecido "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto, seguro ou livre de erros. Na extensão máxima permitida por lei:
                            </p>
                            <ul className="mt-4 space-y-2 text-base leading-relaxed text-zinc-500">
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                                    <span>Não nos responsabilizamos por decisões tomadas com base nas informações fornecidas pelo aplicativo</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-2 h-2 w-2 rounded-full bg-zinc-900" />
                                    <span>Não somos responsáveis por perdas ou danos indiretos, incidentais ou consequentes</span>
                                </li>
                            </ul>
                            <p className="mt-4 text-base leading-relaxed text-zinc-500">
                                O AlgoFlow é uma ferramenta educacional interativa de estrutura de dados e algoritmos.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Modificações dos Termos
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após sua publicação no aplicativo. Recomendamos que você revise periodicamente estes termos. O uso continuado do serviço após quaisquer modificações constitui sua aceitação dos novos termos.
                            </p>
                        </section>

                        <section className="rounded-2xl border border-zinc-200/40 bg-zinc-100/30 p-6">
                            <h2 className="mb-4 flex items-center text-lg font-semibold text-zinc-900">
                                <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900" />
                                Lei Aplicável
                            </h2>
                            <p className="text-base leading-relaxed text-zinc-500">
                                Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será resolvida nos tribunais competentes do Brasil.
                            </p>
                        </section>
                    </div>

                </section>
            </main>
        </LandingTemplate>
    );
}
