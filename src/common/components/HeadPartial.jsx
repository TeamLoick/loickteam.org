import Head from 'next/head';

export default function HeadPartial() {
  return (
    <>
      <Head>
        <title>LoickTeam</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale"
        ></meta>
        <meta
          name="description"
          content='LoickTeam es una organización de profesionales de la tecnología que busca lanzar proyectos de una nueva forma colaborativa donde se aprende y se conocen a nuevas personas. Aplicando el ancestral lema "La práctica hace al maestro" en el sector tecnológico.'
        ></meta>
      </Head>
    </>
  );
}
