export function Header({ usuario, onToggleVip }) {
  return (
    <header>
      <img src={usuario.imagen} alt={usuario.nombre} width={60} />
      {usuario.vip
        ? <h2>¡Bienvenido de nuevo, {usuario.nombre}!</h2>
        : <h2>{usuario.nombre}</h2>
      }
      <button onClick={onToggleVip}>
        {usuario.vip ? "Quitar VIP" : "Hacer VIP"}
      </button>
    </header>
  );
}