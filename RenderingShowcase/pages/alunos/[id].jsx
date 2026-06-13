export async function getStaticPaths() {
  const ids = [100, 200, 300, 400];
  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true,
    paths,
  };
}

export async function getStaticProps({ params }) {
  const id = +params.id;
  const aluno = {
    id,
    nome: `João Almeida ${id}`,
    email: `exemplo-${id}@gmail.com`,
  };

  return {
    props: {
      aluno,
    },
  };
}

export default function AlunoPorId(props) {
  const { aluno } = props;
  return (
    <div>
      <h1>Detalhes do Aluno</h1>

      {aluno ? (
        <ul>
          <li>{aluno.id}</li>
          <li>{aluno.nome}</li>
          <li>{aluno.email}</li>
        </ul>
      ) : (
        false
      )}
    </div>
  );
}
