import { obterProjeto } from "@/functions/projetos"
import { obterReadme } from "@/functions/github"
import Cabecalho from "@/components/shared/cabecalho"
import Container from "@/components/shared/container"
import CarrosselImagens from "@/components/shared/carrouselImagens"
import Tecnologias from "@/components/tecnologias"
import Readme from "@/components/projetos/components/readme"

// export const revalidate = 3600

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)

	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarrosselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias lista={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}