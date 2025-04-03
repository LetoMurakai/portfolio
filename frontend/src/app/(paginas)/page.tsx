import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing"
import Container from "@/components/shared/container"
import Projetos from "@/components/projetos"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div className="bg-black">
			<Principal tecnologias={tecnologias.destaques} />
			<Container className="py-16 flex flex-col items-center gap-10 bg-black">
				<Projetos titulo="Destaque" lista={projetos.destaques} />
				<Projetos titulo="Web" lista={projetos.web} />
				<Projetos titulo="Mobile" lista={projetos.mobile} />
				<Projetos titulo="Jogos" lista={projetos.jogos} />
				<Curriculo tecnologias={tecnologias.todas} />
			</Container>
		</div>
	)
}