import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(14,12,11,0.1)',
      padding: '32px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
      background: 'var(--linen)',
    }}>
      <p style={{
        margin: 0,
        fontSize: '10px',
        fontWeight: 300,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(14,12,11,0.35)',
      }}>
        © {new Date().getFullYear()} JUUN Wellness · Hecho en México
      </p>
      <nav style={{ display: 'flex', gap: '24px' }}>
        <Link href="/privacidad" style={linkStyle}>Aviso de privacidad</Link>
        <Link href="/terminos" style={linkStyle}>Términos y condiciones</Link>
      </nav>
    </footer>
  )
}

const linkStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 300,
  letterSpacing: '0.15em',
  textTransform: 'uppercase',
  color: 'rgba(14,12,11,0.45)',
  textDecoration: 'none',
}
