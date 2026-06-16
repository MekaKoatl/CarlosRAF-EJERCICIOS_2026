export function Gatos() {
  const fotos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQEqDTOP8emufgIMDhxL7p1pnJEy_SE9s_KrErCcL1BaZyeuwIS8S5YZU&s=10",
    "https://preview.redd.it/post-the-best-cat-memes-you-got-in-the-comments-please-v0-kg82lbnu0ste1.png?auto=webp&s=e6f9eee86484f5de3f4e31f3c33b2d07fb982bd5",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRp1PPaGRoUQcUHqbRH4bOI7isDieWE5M8HO7C5mjIGl8RWxqr7D3SWAvT&s=10",
  ];

  return (
    <div>
      <h2>Gatos</h2>
      {fotos.map((foto, index) => (
        <img key={index} src={foto} alt="gato" width={200} />
      ))}
    </div>
  );
}

export default Gatos;