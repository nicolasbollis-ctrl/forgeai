export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial'
    }}>
      <div style={{ textAlign: 'center', maxWidth: 700 }}>
        <h1 style={{ fontSize: 48, marginBottom: 20 }}>
          ForgeAI
        </h1>

        <p style={{ fontSize: 20, opacity: 0.8, marginBottom: 30 }}>
          Gere qualquer site com inteligência artificial.
        </p>

        <textarea
          placeholder="Descreva o site que deseja criar..."
          style={{
            width: '100%',
            height: 150,
            borderRadius: 12,
            padding: 20,
            background: '#111',
            color: 'white',
            border: '1px solid #333'
          }}
        />

        <br /><br />

        <button style={{
          padding: '16px 32px',
          borderRadius: 12,
          border: 'none',
          fontSize: 18,
          cursor: 'pointer'
        }}>
          Gerar Site Agora
        </button>
      </div>
    </div>
  );
}