import Link from "next/link";

export default function CadastroUsuario() {
  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <Link href="home">
        <button>Sair</button>
      </Link>
    </div>
  );
}
