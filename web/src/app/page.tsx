export default function Page() {
  return (
    <main style={{ maxWidth: 360, margin: "80px auto", padding: 16 }}>
      <form>
        <input placeholder="ID" style={{ width: "100%", marginTop: 12 }} />
        <input placeholder="Password" type="password" style={{ width: "100%", marginTop: 12 }} />
        <button style={{ width: "100%", marginTop: 16 }}>Sign in</button>
      </form>
    </main>
  );
}